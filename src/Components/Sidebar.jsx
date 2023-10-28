import React from "react";
import sideImage from "../assets/images/bg-sidebar-desktop.svg";
import { sidebarData } from "../Utils/sidebar";

function Sidebar({page,setPage}) {
  function handleClick(pageName){
    setPage(pageName)
  }
  return (
    <div className="h-full relative w-2/5">
      <img src={sideImage} alt="Sidebar Image" className="h-full" />
      <div className="absolute z-10 top-0 flex flex-col mt-4">
        {sidebarData.map((item, index) => (
          <div
            key={item.step}
            className="flex items-center text-white h-[30px] ml-6 mt-6"
          >
            <div className="w-[30px] h-[30px] border-2 border-gray-400 rounded-full flex items-center justify-center text-xs">
              {index + 1}
            </div>
            <button onClick={()=>handleClick(item.page)}><div className="ml-4  text-left">
              <p className="text-xs text-gray-400">{item.step}</p>
              <p className="text-sm">{item.stepInfo}</p>
            </div></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
