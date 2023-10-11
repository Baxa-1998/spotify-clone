import React from 'react'
import style from '../Header/Header.module.scss'
import { useContext } from 'react'
import { searchCTX } from '../Context/SearchCTX'

export const SearchFrom = ({showSearch}) => {


    const {spotifySearchQuery, setSpotifySearchQuery} = useContext(searchCTX)
  return (
    <form
    className={`${style.form} ${showSearch ? style.show : ""}`}
    action=""
  >
    <img
      className="absolute bg-[yellow left-[50px] top-[10px] border-none cursor-pointer"
      src="./icons/header-search.svg"
      alt=""
    />
    <input
      className="w-[468px] h-[52px] ml-[33px] border rounded-[33px] pl-[55px] pr-[16px] text-[18px] font-medium"
      type="search"
      placeholder="Artist, songs, or podcast"
      value={spotifySearchQuery} 
      onChange={e => setSpotifySearchQuery(e.target.value)}
    />
  </form>
  )
}
