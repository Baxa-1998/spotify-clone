import React, { useContext } from "react";
import { useState } from "react";
import { DropDown } from "../UI/DropDown/DropDown";
import { SortPanel } from "../SortPanel/SortPanel";
import { AiOutlineSearch } from "react-icons/ai";
import { playlistCTX } from "../Context/PlaylistCTX";

export const ControlPanel = ({ isSort, selectedSort }) => {
  const [play, setPause] = useState(true);

  const [showSearch, setSetSearch] = useState(false);
   const {searchQuery, setSearchQuery} = useContext(playlistCTX)

  const openSearch = () => setSetSearch(true);
  const closeSearch = () => setSetSearch(false);

  return (
    <div className="flex justify-between relative" onClick={closeSearch}>
      <div className="flex">
        <img
          className="transition duration-300 hover:scale-[1.1] cursor-pointer"
          src={play ? "./tracklist/play.svg" : "./tracklist/pause.svg"}
          alt="play"
        />
        <img className="ml-6" src="./tracklist/heart.svg" alt="heart" />
        <img className="ml-4" src="./tracklist/download.svg" alt="download" />
        <img className="ml-4" src="./tracklist/options.svg" alt="options" />
      </div>
      <div className="flex items-center">
        <div onClick={e => e.stopPropagation()} >
          {showSearch ? (
            <form className="relative  mr-[25px] flex items-center" action="">
              <AiOutlineSearch
                className="absolute z-50 ml-[5px] mt-[10px]"
                color="white"
                size={20}
              />
              <input
                className="bg-[#444242] w-[200px] h-[30px] rounded outline-none mt-[10px] text-[#fff] text-[18px] pl-[30px]"
                placeholder="search"
                type="search"
                value= {searchQuery} 
                onChange={e => setSearchQuery(e.target.value)}
              />
            </form>
          ) : (
            <img
              className="mr-[15px]"
              src="./tracklist/search.svg"
              alt="search"
              onClick={openSearch}  
          

            />
          )}
        </div>

        {/* <p className="text-[#fff] ml-8 font-medium pr-3">Custom order</p> */}

        <SortPanel value={selectedSort} onChange={isSort} />
      </div>
    </div>
  );
};
