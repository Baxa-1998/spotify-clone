import React from "react";
import { Link } from "react-router-dom";

export const TopNavbar = ({handleHeader}) => {
  return (
    <div className="w-full h-fit font-bold text-[18px] pt-[70px] pb-[20px]">
      <ul> 
            {/* Home */}
      <Link className="flex" to='/'>
          {" "}
          <img  src="./icons/home.png" alt="" /> <li className="ml-[20px]">Home</li>
        </Link>
        {/* Search */}
        <Link className="flex mt-[20px] hover:text-[white]" to='/search'>
          {" "}
          <img  src="./icons/search.png" alt="" /> <li className="ml-[20px]">Search</li>
        </Link>
        {/* Library */}
        <Link className="flex mt-[20px] hover:text-[white]" to='./library'>
          {" "}
          <img src="./icons/library.png" alt="" /> 
          <li className="ml-[20px]">Your Library</li>
        </Link>

        <Link className="flex mt-[20px] hover:text-[white]" to='/createPlaylist'>
          {" "}
          <img src="./icons/create.png" alt="" />
          <li className="ml-[20px]">Create Playlist</li>
        </Link>

        <Link className="flex mt-[20px] hover:text-[white]" to='/likedSongs'>
          {" "}
          <img src="./icons/liked.png" alt="" />
          <li className="ml-[20px]">Liked Songs</li>
        </Link>

      </ul>
      <hr className="mt-[25px] opacity-[30%]" />
    </div>
  );
};
