import { Slider } from '@mui/material'
import React from 'react'
import { useState } from 'react';

export const FooterRight = ({audioRef}) => {
  const [progress, setProgress] = useState()


  const handleVolumeChange = (event) => {
    let volume = event.target.value;
    if (volume < 0) {
      volume = 0;
    } else if (volume > 1) {
      volume = 1;
    }
    audioRef.current.volume = volume;
  };
  return (
  
    <div className="flex items-center">
    <img src="./icons/queue.svg" alt="queue" />
    <img src="./icons/devices.svg" alt="queue" />
    <img src="./icons/volume.svg" alt="volume" />
    <Slider
            onChange={handleVolumeChange}
            sx={{
              width: "120px",
              height: "5px",
              color: "#fff",
              marginLeft: "15px",
            }}
            size="medium"
            min={0}
            max={0.5}
            step={0.1}
  
            defaultValue={50}
            aria-label="Small"
            
           
          />
        
    <img src="./icons/fullscreen.svg" alt="volume" />
  </div>
  )
}
