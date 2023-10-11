import React, { useContext } from 'react'
import { currentPlay } from '../Context/CurrentTrack.CTX';
import { playlistCTX } from '../Context/PlaylistCTX';
import style from '../Tracks/Track.module.scss'
import { useState } from 'react';
import { Audio } from 'react-loader-spinner';

export const ArtistTrack = ({arr}) => {
    const {selectTrack, setSelectTrack} = useContext(currentPlay)
    const {searchQuery} = useContext(playlistCTX)
    const [likeState, setLikeState] = useState(false)
    const [play, setPlay] = useState(true)

  return (
<div className='pl-[43px] pr-[40px]'>
    <div className='flex'>
    <img
          className="transition duration-300 mt-[15px] hover:scale-[1.1] cursor-pointer"
          src={play ? "./tracklist/play.svg" : "./tracklist/pause.svg"}
          alt="play"
        />
         <img className="ml-4" src="./tracklist/options.svg" alt="options" />

    </div>

    <h2 className='text-[#fff] text-[20px] font-semibold mt-[15px]'>Popular track</h2>
<table className="w-full">
  
        {/* Information */}

        {/* <tr
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
        </tr> */}
        <br />

        {/* Tracks */}
        {arr
        ?.filter((item) =>
          item?.name?.toLowerCase().includes(searchQuery)
        )
        .map((item, idx) => (
          <tr
            align="center"
            className={`${style.tracks} ${
              selectTrack.id === item?.id ? "bg-[#282828]" : ""
            }`}
            onClick={() => {
              setSelectTrack({
                name: item?.name,
                bigImg: item?.album?.images[0]?.url,
                img: item?.album.images[2].url,
                uri: item?.preview_url,
                duration_ms: Math.round(item?.duration_ms / 60000),
                album: item?.name,
                artist: item?.album?.artists[0]?.name,
                id: item?.id,
              });
            }}
          >
            <td className="font-medium text-[#B3B3B3] flex items-center">
              {selectTrack.id === item?.id ? (
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
                src={item?.album.images[2].url}
                alt=""
              />
              {/* track name */}
              <p
                className={`text-[#fff] text-start font-medium text-[20px] ml-[21px] ${
                  selectTrack.id === item?.id ? "text-green-400" : ""
                }`}
              >
                {item?.name} <br />
                {/* artist name */}
                <span className="font-medium text-start text-[18px] text-[#B3B3B3]">
                  {item.artists.map((artist) => artist.name).join(" ")}
                </span>
              </p>
              <p></p>
            </td>
            {/* Album */}
            <td className="font-medium text-[#B3B3B3]">
              {item.album?.name}
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
                {Math.floor(item?.duration_ms / 60000)} :
                {((item?.duration_ms % 60000) / 1000).toFixed(0)}
              </p>
            </td>
          </tr>
        ))}
     
     
      
      
        
   
  
      </table>

</div>
  )
}
