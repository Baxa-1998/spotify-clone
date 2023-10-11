import React, { useEffect, useState } from "react";
import style from "./Home.module.scss";
import { MixHeader } from "../../Component/UI/MixHeader/MixHeader";
import { MixBody } from "../../Component/UI/MixBody/MixBody";
import axios from "axios";
import { useContext } from "react";
import { tokenCTX } from "../../Component/Context/Token";
import { spotify } from "../../Component/Context/Spotify.CTX";
import { Link } from "react-router-dom";
import { playlistCTX } from "../../Component/Context/PlaylistCTX";
import { Preloader } from "../../Component/Preloader/Preloader";
import Greeting from "../../Component/Greeting/Greeting";
import { useHttp } from "../../hook/http.hook";
import { NotFound } from "../NotFound/NotFound";
import { PlaylistCard } from "../../Component/PlaylistCard/PlaylistCard";
import { ArtistsCard } from "../../Component/ArtistsCard/ArtistsCard";

export const Home = ({ track, isGetId }) => {
  const { mixArray, setMixArray } = useContext(playlistCTX);

  const [artist, setArtist] = useState([]);

  const { loading, request, error } = useHttp();

  const { user_id } = useContext(spotify);
  const type = "artists";

  // users playlist
  useEffect(() => {
    request(`https://api.spotify.com/v1/users/${user_id}/playlists/`).then(
      (res) => setMixArray(res.items)
    );
    // axios
    //   .get(
    //     `
    //   https://api.spotify.com/v1/users/${user_id}/playlists/`,

    //     {
    //       headers: { Authorization: `Bearer ${token}` },
    //     }
    //   )
    //   .then((res) => setMixArray(res.data?.items));
  }, []);

  // get albums
  useEffect(() => {
    request(`
    https://api.spotify.com/v1/me/top/${type}?limit=6`).then((res) =>
      setArtist(res.items)
    );
  }, []);

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <div className={style.home}>
      <Greeting />
      <div className={style.headerMix}>
        {mixArray.map((mix, idx) => (
          <MixHeader track={track} arr={mix} id={idx} />
        ))}
      </div>

      <div className="mt-[50px]">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-[30px] text-[#fff]">
            Playlist for you
          </h1>
          <span className="text-[#ADADAD] text-[16px] font-bold">SEE ALL</span>
        </div>

        <div className="flex justify-between flex-wrap items-center">
          {mixArray
            .slice(0, 14)
            .filter((item) => item.name.includes("My recommendation playlis"))
            .map((item, idx) => (
              <PlaylistCard arr={item} track={track} id={idx} />
            ))}
        </div>
      </div>

      <div className="mt-[50px]">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-[30px] text-[#fff]">
            Your Top artists
          </h1>
          <span className="text-[#ADADAD] text-[16px] font-bold">SEE ALL</span>
        </div>

        <div className="flex justify-between flex-wrap items-center">
          {artist.map((item, idx) => (
            <ArtistsCard isGetId={isGetId} arr={item} id={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};
