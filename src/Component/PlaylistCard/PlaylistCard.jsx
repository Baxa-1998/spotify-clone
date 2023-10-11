import React from 'react'
import style from './PlaylistCard.module.scss'
import { Link } from 'react-router-dom'


export const PlaylistCard = ({arr, id,track,}) => {
  return (
    <Link to='/playlist'>

    <div key={id} onClick={()=> track(arr) } className={style.bodyItem}>
      <div className={style.imgBlock}>
        <img className={style.play} src="/mix/play.png" alt="" />
        <img className="w-[182px] h-[182px]" src={arr?.images[0]?.url} alt="photo" />
      </div>

      <h3>{id +1} Playlist for you</h3>
   

    
    </div>
    </Link>
  )
}
