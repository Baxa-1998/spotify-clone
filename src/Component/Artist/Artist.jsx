import React from "react";
import style from "./Artist.module.scss";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { tokenCTX } from "../Context/Token";
import { ArtistPanel } from "../ArtistPanel/ArtistPanel";
import { ArtistTrack } from "../ArtistTrack/ArtistTrack";

export const Artist = ({ getId }) => {
   
  const token = useContext(tokenCTX);

  const [artist, setArtist] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.spotify.com/v1/artists/${getId?.id}/top-tracks?market=UZ`,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => setArtist(res.data?.tracks));
  }, [getId]);

  return <div className={style.artist}>
    <ArtistPanel getId= {getId} artist={artist}/>
    
    <ArtistTrack arr={artist}/>
  
    

  </div>;
};
