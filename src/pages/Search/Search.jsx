import React, { useContext, useEffect, useState } from "react";
import style from "./search.module.scss";
import { SearchResult } from "../../Component/SearchResult/SearchResult";
import UserGenres from "../../Component/UserGenres/UserGenres";
import axios from "axios";
import { tokenCTX } from "../../Component/Context/Token";
import { Categories } from "../../Component/Categories/Categories";
import { searchCTX } from "../../Component/Context/SearchCTX";
import { useHttp } from "../../hook/http.hook";

export const Search = () => {
  const [getHistory, setGetHistory] = useState([
    {
      id: 1,
      title: "The Chainsmokers",
      img: "./search/1.jpg",
      category: "Artist",
    },
    { id: 2, title: "Ed Sheeran", img: "./search/2.jpg", category: "Artist" },
  ]);

  // get all categories
  const [getAllCategories, setGetAllCategories] = useState([]);

  const token = useContext(tokenCTX);

  const { spotifySearchQuery, setSpotifySearchQuery } = useContext(searchCTX);

  const {response, loading, error} = useHttp()

  const [searchArtists, setSearchArtists] = useState()
  const [searchTracks, setSearchTracks] = useState()





  const [userGenres, setUserGenres] = useState([
    {
      id: 1,
      title: "Pop",
      img: "./search/genres/1.png",
      background: "#876AA7",
    },
    {
      id: 2,
      title: "Hip-Hop",
      img: "./search/genres/2.png",
      background: "#BA5D07",
    },
    {
      id: 3,
      title: "Afro",
      img: "./search/genres/2.png",
      background: "#AF2896",
    },
  ]);

  // get all categories throught axios library
  useEffect(() => {
    axios
      .get(
        `https://api.spotify.com/v1/browse/categories`,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => setGetAllCategories(res.data?.categories.items));
  }, []);


  //get spotify tracks
  useEffect(() => {
    if(!spotifySearchQuery){
      setSearchArtists()
      setSearchTracks()
    }

    axios.get(
      `https://api.spotify.com/v1/search?q=${spotifySearchQuery}&type=artist%2Ctrack`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }

    )
    .then((res) =>  {
      setSearchArtists(res?.data?.artists);
      setSearchTracks(res?.data?.tracks)

    } )
    
      

    
   
  
  
  }, [spotifySearchQuery]);

  return (
    <div className={style.search}>
     
        {searchArtists !== undefined  ? <h1 className="mt-[25px] text-[32px] font-bold">Artists</h1> : ''} 
      <div className="flex flex-wrap gap-5 items-center ">
      
       
        {searchArtists !== undefined ? searchArtists.items.map((item) => (
       
          
             <SearchResult arr={item} img= {item.images[1]?.url}/>
        
         
        ))  : '' }

      </div>
      {searchTracks !== undefined  ? <h1 className="mt-[25px] text-[32px] font-bold">Tracks</h1> : ''} 
      <div className="flex flex-wrap gap-4 items-center w-full"> 
      {searchTracks !== undefined ? searchTracks.items.map((item) => (
       
          
       <SearchResult arr={item} img={item.album.images[0].url} />
  
   
  ))  : '' }



      </div>
      <div>
        <h1 className="font-bold text-[32px] text-[#fff] mt-[41px]">
          Your top genres
        </h1>
        <UserGenres arr={userGenres} />
      </div>

      <div>
        <h1 className="font-bold text-[32px] text-[#fff] mt-[41px]">
          Browse all
        </h1>

        <div>
          <Categories arr={getAllCategories} />
        </div>
      </div>
    </div>
  );
};
