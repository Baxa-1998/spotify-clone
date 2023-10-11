import React from "react";
import { useContext } from "react";
import { currentPlay } from "../Context/CurrentTrack.CTX";

export const FooterLeft = ({ openDrawer}) => {
  const { selectTrack } = useContext(currentPlay);

  return (
    <div className="flex h-fit">
      <img
        onClick={openDrawer}
        className="cursor-pointer"
        src={
          selectTrack.img
        }
        alt=""
      />

      <div className="ml-[21px] overflow-hidden w-[150px] whitespace-nowrap">
        <h3 className="text-[#FFFFFF] text-[18px] font-medium">
          {selectTrack.name}
        </h3>
        <p className="text-[#B3B3B3] text-[16px] font-medium">
          {selectTrack.album}
        </p>
      </div>

      <img className="ml-[32px]" src="./icons/heart.svg" alt="" />
    </div>
  );
};
