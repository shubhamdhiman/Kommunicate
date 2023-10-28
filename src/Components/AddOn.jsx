


import React from "react";
import Heading from "./SubComponents/Heading";
import { headingAndSub } from "../Utils/headingsAndSub";
import { addOnData } from "../Utils/addOn";
import { useAppContext } from "../Components/SubComponents/AppContext";

function AddOn({ setPage }) {
  const { appData, setAppData } = useAppContext();
  const head = headingAndSub[2].heading;
  const subHead = headingAndSub[2].subHeading;

  // Function to handle checkbox changes
  function handleCheckboxChange(plan) {
    if (appData.addOns.some((addOn) => addOn.heading === plan.heading)) {
      // Remove the add-on if it's already in the list
      const updatedAddOns = appData.addOns.filter(
        (addOn) => addOn.heading !== plan.heading
      );
      setAppData({ ...appData, addOns: updatedAddOns });
    } else {
      // Add the add-on to the list
      setAppData({ ...appData, addOns: [...appData.addOns, plan] });
    }
  }

  function handleNextPage() {
    if (appData.planType) {
      setPage("Summary");
    }
  }

  function handleLastPage() {
    setPage("Plan");
  }

  return (
    <div className="w-[400px] my-12">
      <Heading heading={head} subHeading={subHead} />
      <div className="mt-8">
        {addOnData.map((plan) => {
          const isSelected = appData.addOns.some(
            (addOn) => addOn.heading === plan.heading
          );

          return (
            <div
              key={plan.heading}
              className={`text-left border-2 ${
                isSelected ? "border-[#0a00c6]" : "border-gray-200"
              } rounded-md w-full h-[70px] p-1 flex items-center  justify-between mt-4`}
              onClick={() => handleCheckboxChange(plan)}
            >
              <div className="flex">
                <input type="checkbox" className="ml-4" checked={isSelected} />
                <div className="ml-4">
                  <p className="text-sm text-[#0a00c6] font-bold">
                    {plan.heading}
                  </p>
                  <p className="text-xs text-gray-400 ">{plan.subHeading}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 mr-4">{plan.price}</p>
              </div>
            </div>
          );
        })}
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

export default AddOn;
