import React from "react";
import style from "./CreatePlaylist.module.scss";
import { RxPencil1 } from "react-icons/rx";
import { PiMusicNotesSimpleBold } from "react-icons/Pi";
import { useContext } from "react";
import { userDataInfo } from "../Context/UserDataCTX";
import { playlistCTX } from "../Context/PlaylistCTX";
import { AddTracks } from "../AddTracks/AddTracks";
import { CreateModal } from "../CreateModal/CreateModal";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { tokenCTX } from "../Context/Token";
import axios from "axios";
import { spotify } from "../Context/Spotify.CTX";
export const CreatePlaylist = () => {
  const { userData } = useContext(userDataInfo);
  const { mixArray } = useContext(playlistCTX);


  const [openCreateModal, setCreateModal] = useState(false);

  const closeModal = () => setCreateModal(false);
  const openModal = () => setCreateModal(true);
  const [file, setFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const token = useContext(tokenCTX);
  const { user_id } = useContext(spotify);

  const [test, setTest] = useState(`My Plalist № ${mixArray.length + 1}`);

  
  function postPlaylist() {
    const blob = new Blob([imageSrc], {type: 'image/jpeg'}) 
    const imageURL = URL.createObjectURL(blob)
  
    
  
    axios
      .post(
        `
    https://api.spotify.com/v1/users/${user_id}/playlists`,
        {
          name: test,
          public: true,
       
   

        
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res));
  }

  function handleChange(event) {
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (file) {
   

      // Отправляем файл на сервер

      postPlaylist();
    }
  }

  return (
    <div className={style.createPlaylist}>
      <CreateModal
        img={imageSrc}
        openCreateModal={openCreateModal}
        file={file}
        submit={handleSubmit}
        change={handleChange}
        close={closeModal}
        post={postPlaylist}
        test={test}
        setTest={setTest}
      />
      <div className="flex">
        <div onClick={openModal} className={style.addPhoto}>
          <button>
            <RxPencil1 className={style.pencil} size={110} color="white" />
            <PiMusicNotesSimpleBold
              className={style.note}
              size={110}
              color="#b3b3b3"
            />
            <p className="text-[#fff] text-6 font-medium">Выбрать фото</p>
          </button>
        </div>
        <div className="pl-[35px] mt-[25px] text-[#fff] text-[16px]">
          <span className="text-[18px] font-medium">private playlist</span>
          <h2
            onClick={openModal}
            className="text-[80px]  font-extrabold cursor-pointer"
          >
            {test}
          </h2>
          <div className="flex mt-[50px] items-center">
            <img
              className="rounded-[50%] w-[35px] h-[35px] font-medium"
              src={userData.images?.[0].url}
              alt=""
            />
            <p className="ml-[5px]">{userData.display_name}</p>
          </div>
        </div>
      </div>
      <AddTracks />
    </div>
  );
};
