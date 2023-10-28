import React, { useEffect } from "react";
import { headingAndSub } from "../Utils/headingsAndSub";
import Heading from "./SubComponents/Heading";
import { useAppContext } from "../Components/SubComponents/AppContext";
function SummaryPage({setPage}) {
  const head = headingAndSub[3].heading;
  const subHead = headingAndSub[3].subHeading;
  const { appData, setAppData } = useAppContext();
  function handleNextPage() {
    if (appData.planType) {
      setPage("Thankyou");
    }
  }
useEffect(()=>{
    function calculateTotal(){
        let total = 0;
        total+= parseInt(appData.planPrice)
        if(appData.addOns.length>0){
            for(let i = 0;i<appData.addOns.length;i++){
                total += parseInt(appData.addOns.planMonthly)
            }
        }
        setAppData({...appData,grandTotal:total})
      }
      calculateTotal()
},[])
  function handleLastPage() {
    setPage("AddOn");
  }
  return (
    <div className="w-[400px] my-12">
      <Heading heading={head} subHeading={subHead} />
      <div className="bg-gray-100 rounded-md w-full mt-8">
        <div className="p-4 flex justify-between"> 
            <div>
            <p className="text-sm font-bold text-[#0a00c6]">{appData.planType}<span className="text-xs font-100">({appData.planDuration})</span></p>
            <p className="text-[10px] text-gray-500 underline">Change Plan</p>
            </div>
            <p className="text-sm font-bold text-[#0a00c6]">${appData.planPrice}</p>
        </div>
        <hr />
        <div>
            {
                appData.addOns.map((item)=>{
                    return <div className="flex justify-between mt-4 p-4">
                        <p className="text-sm font-bold text-gray-500">{item.heading}</p>
                        <p className="text-sm font-bold text-gray-500">+${item.planMonthly}</p>
                    </div>
                })
            }
        </div>
      </div>
        <div  className="flex justify-between mt-4 p-4">
        <p className="text-sm font-bold text-gray-500">Total</p>
        <p>${appData.grandTotal}</p>
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

export default SummaryPage;
