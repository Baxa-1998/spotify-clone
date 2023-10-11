import axios, { Axios } from "axios";
import React, { useContext, useEffect } from "react";
import { tokenCTX } from "../../Component/Context/Token";
import { useState } from "react";
import style from "./Playlist.module.scss";
import { PlaylistMain } from "../../Component/PlaylistMain/PlaylistMain";
import { Preloader } from "../../Component/Preloader/Preloader";
import { TrackList } from "../../Component/TrackList/TrackList";
import { playlistCTX } from "../../Component/Context/PlaylistCTX";
import axiosInstance from "../../hook/axiosInstance";

export const Playlist = ({ tracks, getId }) => {
  // const [getTracks, setGetTracks] = useState([]);
  // const [originalData, setOriginalData] = useState([]);

  const {
    getTracks,
    setGetTracks,
    originalData,
    setOriginalData,
    isSort,
    selectedSort,
  } = useContext(playlistCTX);


 

  const token = useContext(tokenCTX);
  // get tracks
  const [getHref, setGetHref] = useState({
    name: "",
    images: null,
    url: [],
    public: Boolean,
    owner: "",
    total: "",
    duration: [],
  });

  // get href of playlist and set in state
  useEffect(() => {
    
 
    axios
      .get(
        `
          ${tracks.href}`,
       

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        (res) => {
          setGetHref({
            images: res?.data?.images[0].url,
            url: res.data?.tracks?.items,
            public: res.data.public,
            name: res.data.name,
            owner: res.data.owner?.display_name,
            total: res.data.tracks?.total,
          });
          setGetTracks(res.data?.tracks?.items);
         
         
       
        }
      

        // setIsloader(false)
      );
  }, [tracks]);



  // get tracks url res.data.tracks.items
  // get images url [0].track.name

  return (
    <>
      {" "}
      {getHref.url.length  ? (
        <div className={style.playlist}>
          <PlaylistMain arr={getHref} />
          <TrackList
            isSort={isSort}
            selectedSort={selectedSort}
           
          
          />
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};
