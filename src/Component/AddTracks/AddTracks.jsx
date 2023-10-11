import React from 'react'
import style from '../CreatePlaylist/CreatePlaylist.module.scss' 
import {AiOutlineSearch} from 'react-icons/ai'

export const AddTracks = () => {

 
  return (
    <div  className={style.addTracks}> 
   
    <img className="opacity-[50%] hover:opacity-[100%]" src='./tracklist/options.svg' alt="" />
    <div>
    <hr className="mt-[35px] opacity-[30%]"/> 
    <h3 className="text-[#fff] font-bold text-[25px] mt-[25px]">Let's add some tracks in your new playlist</h3>
    <form action="">
    <AiOutlineSearch className='absolute z-50 ml-[5px]' color='gray' size={25}/>
    {/* <img className='absolute z-50' src="./icons/header-search.svg" alt="" /> */}
    <input placeholder='search tracks and release' type="search"/> 
        </form>    
  

    </div>



  </div>
  )
}
