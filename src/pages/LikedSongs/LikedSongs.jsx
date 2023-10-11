import React, { useEffect } from 'react'
import { PlaylistMain } from '../../Component/PlaylistMain/PlaylistMain'
import { TrackList } from '../../Component/TrackList/TrackList'
import { useContext } from 'react'
import { likedSongsCTX } from '../../Component/Context/LikedSongsCTX'
import axios from 'axios'
import { tokenCTX } from '../../Component/Context/Token'
import style from './LikedSongs.module.scss'
import { ControlPanel } from '../../Component/ControlPanel/ControlPanel'
import { playlistCTX } from '../../Component/Context/PlaylistCTX'
import { useHttp } from '../../hook/http.hook'

export const LikedSongs = () => {
  
  const token = useContext(tokenCTX)


    
  const {getTracks, setGetTracks,originalData, setOriginalData, isSort,selectedSort} = useContext(playlistCTX)

  const  {request} = useHttp()

  const {likedSongs, setLikedSongs} = useContext(likedSongsCTX)

    // get liked songs
    useEffect(()=>{
      axios
      .get(
        `https://api.spotify.com/v1/me/tracks`,
  
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        (res) =>  setGetTracks(res.data?.items));
      },[])


  


  return (
    <div className={style.likedSongs}>
    <PlaylistMain liked={likedSongs}/>
    {/* <TrackList/> */}
   
   
    <TrackList selectedSort={selectedSort} isSort={isSort} arr={getTracks}/> 

    </div>
  )
}
