import React, { useState } from "react";
import style from "./TrackList.module.scss";
import { ControlPanel } from "../ControlPanel/ControlPanel";

import { Tracks } from "../Tracks/Tracks";

export const TrackList = ({arr, artist,setArray,setArtist, isSort,selectedSort}) => {


  

  return (
    <div className={style.trackList}>
        <ControlPanel  isSort={isSort} selectedSort={selectedSort}/>
      
        <Tracks artist={artist} setArtist={setArtist} setArray= {setArray} arr={arr}/>
    
    </div>
  );
};
