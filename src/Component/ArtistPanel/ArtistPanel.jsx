import React from "react";
import {BsMusicNoteBeamed} from 'react-icons/bs'

export const ArtistPanel = ({ artist, getId }) => {
 
  return (
    <div className="h-[700px] overflow-hidden relative"> 

      
        <img className="object-cover w-full opacity-[70%]" src={getId.images[0].url} alt="" />
        <div className="absolute left-[43px] top-[450px] text-[18px] flex items-center" >
            <BsMusicNoteBeamed color="aqua"/>
        <p className="text-[18px] text-[#fff] font-medium ml-[10px]">{getId.genres[0]}</p>
        </div>

     
        <h1 className="absolute left-[43px] top-[450px] text-[#fff] text-[90px] font-bold">{getId.name}</h1>
        <h1 className="absolute left-[43px] top-[600px] text-[#fff] text-[18px] font-medium">{getId.popularity * 10000} listeners per month</h1>

      
    </div>
  );
};
