import React, { useContext, useEffect, useRef, useState } from "react";

import { currentPlay } from "../Context/CurrentTrack.CTX";
import style from "../Footer/Footer.module.scss";


import { Slider, duration } from "@mui/material";


export const FooterCenter = ({controlTracks, audioRef}) => {
  const [playState, setPlayState] = useState(false);
  const [progress, setProgress] = useState(0);
  const { selectTrack } = useContext(currentPlay);
  const [durationPosition, setDurationPosition] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  


  const progressBar = useRef();

  // const {duration} = audioRef.current
  useEffect(() => {
    const seconds = Math.floor(audioRef.current.duration);

    setDurationPosition(seconds);
    progressBar.current.max = seconds;
  }, [selectTrack.uri, audioRef?.current?.readyState]);

  const calcualateTime = (secs) => {
    const minute = Math.floor(secs / 60);
    const returnedMinutes = minute < 10 ? `0${minute}` : `${minute}`;
    const second = Math.floor(secs % 60);
    const secondReturn = second < 10 ? `0${second}` : `${second}`;
    return `${returnedMinutes} : ${secondReturn}`;
  };

  function updateProgress(item) {
    const { duration, currentTime } = item;
    if (duration) {
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
    }
  }

  function changeProgress(element) {
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (duration * element.value) / 100;
  }

  const startTimer = () => {
    setInterval(() => {
      setCurrentTime(audioRef.current.currentTime);
    }, [1000]);
  };

  // когда трек закончится
  useEffect(() => {
    if (audioRef.current.ended) {
      alert("dfsasfdsdfa");
    }
  }, [progress]);

  // function isDuration () {
  //   console.log();
  // }

  useEffect(() => {
    audioRef.current.src = selectTrack.uri;

    if (playState && audioRef.current) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [playState, selectTrack.uri]);

  function playTrack() {
    setPlayState((prev) => {
      return !prev;
    });
  }

  return (
    <div className="h-f  m-auto">
      <div className="flex  m-auto justify-center">
        <img
          className="ml-[22px] cursor-pointer"
          src="./icons/mix.svg"
          alt="mix"
        />

        <img
          className="ml-[22px] cursor-pointer"
          src="./icons/prev.svg"
          alt="prev"
        />
        <img
          className="ml-[22px] cursor-pointer"
          src={playState ? "./icons/pause.svg" : "./icons/play.svg"}
          alt="play"
          onClick={playTrack}
        />
        <img
        onClick={()=> controlTracks('next')}
          className="ml-[22px] cursor-pointer"
          src="./icons/next.svg"
          alt="next"
        />
        <img
          className="ml-[22px] cursor-pointer"
          src="./icons/repeat.svg"
          alt="repeat"
        />
      </div>
      <div className="flex items-center">
        <span className="mr-[8px] text-[16px] text-[#A6A6A6]">
          {calcualateTime(currentTime)}
        </span>

        <div>
          <audio
            ref={audioRef}
            src={selectTrack.uri}
            onTimeUpdate={(e) => updateProgress(e.target)}
          ></audio>

          <Slider
            onChange={(e) => changeProgress(e.target)}
            sx={{
              width: "552px",
              height: "5px",
              color: "#fff",
              marginLeft: "15px",
            }}
            size="medium"
            value={progress}
            defaultValue={0}
            aria-label="Small"
            ref={progressBar}
          />
          {/* <input
            value={progress}
            type="range"
            className={style.progressBar}
            onChange={changeProgress}
            defaultValue={0}
            min={0}
            step={0}
            ref={progressBar}
          
          /> */}
        </div>
        <span className="ml-[8px] text-[16px] text-[#A6A6A6]">
          {isNaN ? "0:29" : calcualateTime(durationPosition)}
        </span>
      </div>
    </div>
  );
};
