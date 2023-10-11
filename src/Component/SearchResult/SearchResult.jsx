import React from 'react'
import style from './search.module.scss'

export const SearchResult = ({arr,remove,img}) => { 

    

//  album.images[0].url


  return (
  <>
  
    <div  className={style.search}> 
   
      <img onClick={()=> remove(arr.id)} className={style.icon} src="./icons/close.png" alt="" />
      <img className={style.play} src="./mix/play.png" alt="" />
    <img className={style.img} src={img} alt="" /> 
    <h2 className={style.title}>{arr.name}</h2>
    <p className={style.subtitle}>{arr.type.charAt(0).toUpperCase() + arr.type.slice(1)}</p>

        

        
    </div>
    </>
  )
}
