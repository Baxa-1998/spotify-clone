import React from "react";
import style from "./MixBody.module.scss";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { tokenCTX } from "../../Context/Token";
import { useState } from "react";
import { Link } from "react-router-dom";
export const MixBody = ({arr,track}) => {
  const [getAlbums, setGetAlbums] = useState([]);
  const token = useContext(tokenCTX);
  console.log(arr);



  // get Albmos
//   const userID =
//     "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc";

//   useEffect(() => {
//     axios
//       .get(
//         `
        
// https://api.spotify.com/v1/albums?ids=${userID}

//       `,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       .then((res) => setGetAlbums(res));
//   }, []);




  return (
    <Link to='/playlist'>
    <div className={style.bodyItem} onClick={()=> track(arr)}>
      <div className={style.imgBlock}>
        <img className={style.play} src="/mix/play.png" alt="" />
        <img className="w-[182px] h-[182px]" src={arr.images[0]?.url} alt="" />
      </div>

      <h3>{arr.name}</h3>
      <p>{arr.subtitle}</p>

    
    </div>
    </Link>
  );
};
