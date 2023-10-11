import React, { useContext, useRef } from "react";
import style from "./Footer.module.scss";
import { FooterLeft } from "../FooterLeft/FooterLeft";
import { FooterCenter } from "../FooterCenter/FooterCenter";
import { FooterRight } from "../FooterRight/FooterRight";
import { tokenCTX } from "../Context/Token";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const Footer = ({openDrawer}) => {
  const token = useContext(tokenCTX);



  const audioRef = useRef(null);
  // get currently track
  const [getCurrentlyTrack, setCurrentlyTrack] = useState("");


  useEffect(() => {
    axios
      .get(
        `
      
https://api.spotify.com/v1/me/player/currently-playing`,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => setCurrentlyTrack(res?.data?.item));
  }, []);





  const controlTracks = async (type) =>{
    axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,{},

      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ).then(res => console.log(res))
  }

  return (
    <div className="relative mt-[100px]">
      <div className={style.player}>
        <FooterLeft openDrawer={openDrawer}/>
        <FooterCenter audioRef={audioRef} controlTracks={controlTracks} />
        <FooterRight audioRef={audioRef} />
      </div>
    </div>
  );
};
