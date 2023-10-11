import React from "react";
import style from "./Drawer.module.scss";
import { Unicon } from "../UI/Unicon/Unicon";
import { useContext } from "react";
import { currentPlay } from "../Context/CurrentTrack.CTX";

export const Drawer = ({closeDrawer, drawerState}) => {
  const {selectTrack} = useContext(currentPlay)
  return (
    <div className={`${style.drawer} ${drawerState ? style.active : ''}`}> 

      <div className="flex items-center mt-[14px] justify-between">
        <h3 className="text-[#CCCCCC] font-bold text-[20px]">
          {selectTrack.album}
        </h3>
        <div className="flex items-center">
      
      
          <img onClick={closeDrawer} src="./icons/close.svg" alt="" />
        </div>
  
        
      </div>

      <img className="rounded-[12px]" src={selectTrack.bigImg} alt="" />
      <h2 className="text-[#fff] font-extrabold text-[24px] mt-[25px]">{selectTrack.name}</h2>
      <h2 className="text-[#e5e7eb] font-medium text-[18px] mt-[10px]">{selectTrack.artist}</h2>
      <span className="text-[#CCCCCC] text-[18px] font-medium mt-[25px]">
        Let friends and followers on Spotify see what you’re listening to.
      </span> 
      <div>
        <Unicon/>
        <Unicon/>
        <Unicon/>
      </div>
      <p className="text-[#CCCCCC] text-[18px] font-medium mt-[21px]">
      Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.
      </p>
      <div className="flex justify-center mt-[23px]">
          <button className="bg-[#FFFFFF] w-[233px] h-[62px] rounded-[40px] font-bold text-[#171717] text-[18px] hover:opacity-[80%]">SETTINGS</button>
      </div>
    
    


    </div>
  );
};
