import React from 'react'
import style from './Artists.module.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { playlistCTX } from '../Context/PlaylistCTX'

export const ArtistsCard = ({arr, isGetId, id}) => {

 

  return (


    <Link to='/artist'>

    <div key={id} onClick={()=> { isGetId(arr)}} className={style.artist}>
      <div className={style.imgBlock}>
        <img className={style.play} src="/mix/play.png" alt="" />
        <img className="w-[182px] h-[182px] rounded-[50%]" src={arr?.images[0]?.url} alt="artists" />
      </div>
       
      <h3>{arr?.name}</h3>
        <p className='opacity-[70%] text-[18px]'>Artist</p>

   

    
    </div>
    </Link>
  )
}


