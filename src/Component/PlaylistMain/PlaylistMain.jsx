import React, { useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { userDataInfo } from "../Context/UserDataCTX";

export const PlaylistMain = ({ arr, liked}) => {

  const {userData} = useContext(userDataInfo) 

 
  const [durationPlaylist, setDurationPlaylist] = useState();

  useEffect(() => { 
    
    const durationCalculate = arr?.url?.reduce(
      (acc, dur) => acc + dur.track.duration_ms,
      0
    );
    setDurationPlaylist(Math.floor(durationCalculate / 60000));
  }, [arr]);

  return (
    <div className="flex mt-[26px] pl-[41px] pr-[42px]">
      <img
      
        className="w-[297px]"
        src={arr ? arr.images : './photo/liked.png'}
        alt=""
      />
      <div className="w-full h-fit ml-[32px]">
        {arr ? <p className="text-[#fff] font-medium text-[16px]">
          {arr.public ? "PUBLIC PLAYLIST" : "PRIVATE PLAYLIST"}
        </p> : <p className="text-[#fff] font-medium text-[16]">PUBLIC PLAYLIST</p> }
       
        <h1 className="text-[#fff] text-8xl font-extrabold leading-[120px]">
          {arr ? arr.name : 'Liked Songs'}
        </h1>
        {arr ?   <p className="text-[#fff] font-medium text-[20px]">
          { arr.url[0]?.track?.artists[0]?.name}, {arr.url[1]?.track?.artists[0]?.name }
          <span className="text-[#B3B3B3]">and more</span>
        </p> : '' }
      
      {arr ?   <p className="text-[18px] text-[#B3B3B3] font-medium">
          Made by <span className="text-[#fff]">{arr.owner} • </span>{" "}
          {arr.total} songs {durationPlaylist} min
        </p> : <div className="flex items-center mt-[25px]"><img className="rounded-[50%] w-[30px] h-[30px]" src={userData?.images[0]?.url} alt="account" />  <p className="text-[#fff]">{userData?.display_name}</p></div>}
      
      </div>
    </div>
  );
};
