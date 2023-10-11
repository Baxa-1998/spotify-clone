import React from "react";
import { useContext } from "react";
import { currentPlay } from "../Context/CurrentTrack.CTX";
import { useState } from "react";
import { useEffect } from "react";

import style from "./Track.module.scss";

import { playlistCTX } from "../Context/PlaylistCTX";
import { PlaylistTracks } from "../PlaylistTracks/PlaylistTracks";

export const Tracks = ({ artist, setArtist}) => {



 

  const {getTracks, setGetTracks} = useContext(playlistCTX)


  let show;


  if(getTracks.length > 0) {
    show = <PlaylistTracks arr={getTracks}/>



  }else if (artist){
  
  
  
    show = <div>{artist.map((artist)=> (
      <h1>{artist.name}</h1>
    ))}</div>
  }
  



  


 

  

 

  return (
    <div>
      <table className="w-full">
        {/* Information */}

        <tr
          align="start"
          className="pl-6 text-[#B3B3B3] font-medium text-[16px] h-[48px]  border-b  border-b-[#B3B3B3]"
        >
          <th width="30%" className="text-start pl-6">
            # TITLE
          </th>
          <th width="30%">ALBUM</th>
          <th width="30%">DATA ADDED</th>
          <th align="center">
            <img src="./icons/clock.svg" alt="" />
          </th>
        </tr>
        <br />

        {/* Tracks */}
        { show}
     
     
      
      
        
   
  
      </table>
    </div>
  );
};
