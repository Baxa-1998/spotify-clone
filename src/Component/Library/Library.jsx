import React, { useContext, useState, useEffect } from "react";
import style from "./library.module.scss";
import { MixBody } from "../UI/MixBody/MixBody";
import axios from "axios";
import { tokenCTX } from "../Context/Token";
import { LikedSongs } from "../../pages/LikedSongs/LikedSongs";
import { likedSongsCTX } from "../Context/LikedSongsCTX";
import { playlistCTX } from "../Context/PlaylistCTX";
import { Link } from "react-router-dom";


export const Library = ({track}) => {

  
  // const [likedSongs, setLikedSongs] = useState([])
  const {likedSongs, setLikedSongs} = useContext(likedSongsCTX)
  const token = useContext(tokenCTX)

  const {  setMixArray ,mixArray} = useContext(playlistCTX) 
 

    





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
        (res) =>  setLikedSongs(res.data?.items));
      },[])
  









  const [playlist, setPlaylist] = useState([
    {
      mainTitle: "Your top mixes",
      id: 1,
      title: "Chill Mix",
      subtitle: "Julia Wolf, Khalid, ayokay and more",
      img: "/library/1.png",
    },
    {
      id: 2,
      title: "Pop Mix",
      subtitle: "Hey Violet, VÉRITÉ, Timeflies and more",
      img: "/library/2.png",
    },
    {
      id: 3,
      title: "Pheelz Mix",
      subtitle: "WizKid, Asake, Tiwa Savage and more",
      img: "/library/3.png",
    },
    {
      id: 4,
      title: "Indie Mix",
      subtitle: "Joywave, The xx, The Neighbourhood and...",
      img: "/mix/4.png",
    },
    {
      id: 5,
      title: "Daily Mix 1",
      subtitle: "Ayra Starr, Lil Kesh, Ed Sheeran and more",
      img: "/mix/5.png",
    },
  ]);

  return (
    <div className={style.library}>
      <h1 className="font-bold text-[30px] text-[#fff] mt-[25px]">Playlist</h1>

      <div className={style.likedSongs}>
        <div className={style.items}>
          
          <div>  
         <Link to='/likedSongs'>
            <div>
              {likedSongs.slice(0,3).map((track)=> (
                <p className="text-[#fff] text-[20px] font-medium">{track.track.artists[0].name} ● <span className="opacity-[80%]">{track.track.name}</span></p>
              ))}
           
             
            </div>
            </Link>

          
            <h1 className="text-[40px] text-[#fff] mt-[38px] font-medium">Liked songs</h1>
          
    
        <p className="text-[22px] font-medium"> {likedSongs.length} liked songs</p>
        </div>
        
        
   

   

        </div>
      
        
        {mixArray.map((item) => (
          <MixBody track={track} arr={item}/>
        ))}
      </div>
    
    </div>
  );
};
