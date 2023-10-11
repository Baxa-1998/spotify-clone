import React from "react";
import { useContext } from "react";
import { currentPlay } from "../Context/CurrentTrack.CTX";
import { playlistCTX } from "../Context/PlaylistCTX";
import style from "../Tracks/Track.module.scss";
import { useState } from "react";
import { Audio } from "react-loader-spinner";

export const PlaylistTracks = ({ arr }) => {
  const { setSelectTrack, selectTrack } = useContext(currentPlay);
  const { searchQuery } = useContext(playlistCTX);
  const [likeState, setLikeState] = useState(false);
  

  return (
    <>
      {arr
        ?.filter((item) =>
          item?.track?.name?.toLowerCase().includes(searchQuery)
        )
        .map((item, idx) => (
          <tr
            align="center"
            className={`${style.tracks} ${
              selectTrack.id === item.track.id ? "bg-[#282828]" : ""
            }`}
            onClick={() => {
              setSelectTrack({
                name: item.track?.name,
                bigImg: item.track?.album?.images[0]?.url,
                img: item.track?.album.images[2].url,
                uri: item.track?.preview_url,
                duration_ms: Math.round(item.track.duration_ms / 60000),
                album: item.track?.album?.name,
                artist: item.track?.album?.artists[0]?.name,
                id: item.track?.id,
              });
            }}
          >
            <td className="font-medium text-[#B3B3B3] flex items-center">
              {selectTrack.id === item.track.id ? (
                <Audio
                  height="25"
                  width="25"
                  radius="9"
                  color="green"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              ) : (
                <p className="ml-6">{idx + 1}</p>
              )}

              <img
                className="ml-[15px] mt-[5px]"
                src={item.track.album.images[2].url}
                alt=""
              />
              {/* track name */}
              <p
                className={`text-[#fff] text-start font-medium text-[20px] ml-[21px] ${
                  selectTrack.id === item.track.id ? "text-green-400" : ""
                }`}
              >
                {item.track.name} <br />
                {/* artist name */}
                <span className="font-medium text-start text-[18px] text-[#B3B3B3]">
                  {item.track.artists.map((artist) => artist.name).join(" ")}
                </span>
              </p>
              <p></p>
            </td>
            {/* Album */}
            <td className="font-medium text-[#B3B3B3]">
              {item.track.album.name}
            </td>

            <td></td>
            <td className="text-[#fff] flex items-center">
              {" "}
              <img
                className={style.like}
                src={likeState ? "./icons/liked.svg" : "./icons/like.svg"}
                alt="liked"
              />{" "}
              <p className="font-medium ml-6">
                {Math.floor(item.track.duration_ms / 60000)} :
                {((item.track.duration_ms % 60000) / 1000).toFixed(0)}
              </p>
            </td>
          </tr>
        ))}
    </>
  );
};
