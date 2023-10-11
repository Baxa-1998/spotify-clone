import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { tokenCTX } from '../../Context/Token';
import { Link } from 'react-router-dom';


export const BottomNavbar = ({track}) => {
    
    const [navbarPlaylist, setNavbarPlaylist] = useState([])

    const token = useContext(tokenCTX);

    // const {selectTrack} = useContext(currentPlay)

    const user_id = "31xggoj5rvzzshyi4mkydnxcnffa";


    // console.log(selectTrack);
  
    // users playlist
    useEffect(() => {
      axios
        .get(
          `
        https://api.spotify.com/v1/users/${user_id}/playlists`,
  
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => setNavbarPlaylist(res.data?.items));
    }, []);

  return (
    <div className='w-full h-fit text-[18px] font-medium'> 
    <ul>
      <Link to='/playlist'>
      {navbarPlaylist.map((playlist)=>( 
             <div to="/playlist" onClick={()=> track(playlist)} className='hover:text-[white] leading-normal'>
             <li className='mt-[16px]'>{playlist.name}</li>
         </div>

        ))}
      </Link>
     
       

    </ul>
        

    </div>
  )
}
