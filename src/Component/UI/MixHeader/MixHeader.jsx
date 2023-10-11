import React, { useState } from "react";
import style from "./MixHeader.module.scss";
import { Link } from "react-router-dom";

export const MixHeader = ({ arr, track, id }) => { 
 

  return (
    <>
      {" "}
      <Link to="/playlist">
        <div key={id} onClick={() => track(arr)} className={style.item}>
          <img
            className="h-[82px] rounded-l-lg"
            src={arr.images[0]?.url}
            alt=""
          />
          <div className="w-full h-fit flex items-center justify-between">
            <h2 className="font-bold text-[20px] ml-[21px]">{arr.name}</h2>
            <img className={style.play} src="/mix/play.png" alt="" />
          </div>
        </div>
      </Link>
    </>
  );
};
