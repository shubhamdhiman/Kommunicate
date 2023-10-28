import React, { useState } from "react";
import Heading from "./SubComponents/Heading";
import { headingAndSub } from "../Utils/headingsAndSub";
import { useAppContext } from "../Components/SubComponents/AppContext";
import { planData } from "../Utils/plan";
function PlanPage({ setPage }) {
  const head = headingAndSub[1].heading;
  const subHead = headingAndSub[1].subHeading;
  const [isChecked, setIsChecked] = useState(false);
  const { appData, setAppData } = useAppContext();
//   cosnt [price,setPrice]=useState("")
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  function handlePlanChange(name, plPrice) {

    setAppData({ ...appData, planType: name ,planPrice:plPrice});
    setIsButtonClicked(true)
  }
  const handleCheckboxChange = () => {
    setIsButtonClicked(false)
    if (!isChecked) {
      setAppData({ ...appData, planDuration: "Yearly" });
    } else if (isChecked) {
      setAppData({ ...appData, planDuration: "Monthly" });
    }
    setIsChecked(!isChecked);
  };
  function handleNextPage() {
    if (appData.planType) {
      setPage("AddOn");
    }
  }
  function handleLastPage() {
    setPage("Info");
  }

  return (
    <div className="w-[400px] my-12">
      <Heading heading={head} subHeading={subHead} />
      <div className="flex justify-between w-full mt-12">
        {planData.map((plan) => {
            let price;
           appData?.planDuration==="Monthly" ? price = plan.planMonthly : price = plan.planYearly
          return (
            <button
              onClick={() => handlePlanChange(plan.name, price)}
              key={plan.name}
              className={`text-left border-2  ${
                appData.planType === plan.name && isButtonClicked
                  ? "border-[#0a00c6]"
                  : "border-gray-200"
              } rounded-md w-1/4 h-[120px] p-3 flex flex-col justify-between`}
            >
              <img src={plan.imgUrl} width={30} height={30} />
              <div>
                <p className="text-sm text-[#0a00c6] font-bold">{plan.name}</p>
                {appData?.planDuration === "Monthly" ? (
                  <p className="text-xs text-gray-400">{plan.planMonthly}</p>
                ) : (
                  <div>
                    <p className="text-xs text-gray-400">{plan.planYearly}</p>
                    <p className="text-[8px] text-gray-600">2 Months Free</p>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-center bg-gray-100 mt-8">
        <p
          className={`text-sm ${
            isChecked ? "text-gray-400" : "text-[#0a00c6]"
          } font-bold`}
        >
          Monthly
        </p>
        <div className="w-16 p-4 rounded-lg">
          <label className="flex items-center cursor-pointer">
            <div className="relative mb-3">
              <input
                type="checkbox"
                id="slider"
                className="hidden"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <div
                className={`w-8 h-4 rounded-full  absolute transition-transform ${
                  isChecked ? "bg-black" : "bg-gray-400"
                }`}
              />
              <div
                className={`w-4 h-4 bg-white rounded-full absolute transition-transform ${
                  isChecked ? "transform translate-x-4" : ""
                }`}
              />
            </div>
          </label>
        </div>
        <p
          className={`text-sm ${
            !isChecked ? "text-gray-400" : "text-[#0a00c6]"
          } font-bold`}
        >
          Yearly
        </p>
      </div>
      <div className="w-full flex justify-between mt-12">
        <button
          onClick={() => handleLastPage()}
          className="hover:underline text-sm text-gray-400 hover:text-black"
        >
          Go Back
        </button>
        <button
          onClick={() => handleNextPage()}
          className="py-2 px-4 rounded-md bg-[#483eff] text-white hover:bg-[#746df8] text-sm"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default PlanPage;
