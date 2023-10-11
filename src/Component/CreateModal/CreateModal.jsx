import React, { useRef } from "react";
import style from "./CreateModal.module.scss";
import { RxPencil1 } from "react-icons/Rx";
import { PiMusicNotesSimpleBold } from "react-icons/Pi";
import { playlistCTX } from "../Context/PlaylistCTX";
import { useContext } from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
export const CreateModal = ({
  
  file,
  img,
  openCreateModal,
  close,
  submit,
  change,
  test,
  setTest
  

}) => {

 
  


  const { mixArray } = useContext(playlistCTX);
  const inputRef = useRef();
  

  

  // open input file 
  function handleOpenFile() {
    inputRef.current.click();

  
  }



  return (
    <div
      onClick={close}
      className={`${style.createModal} ${openCreateModal ? "visible" : ""}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] h-[400px] bg-[#32323a] rounded-xl m-0 pt-[25px] pl-4 pr-4"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-[#fff] text-[25px] font-bold">
            Data of information
          </h2>
          <AiOutlineClose
            onClick={close}
            color="gray"
            size={25}
            className="hover:bg-[#616060] rounded-[50%]"
          />
        </div>

        <div className="flex h-[200px] w-full">
          <div onClick={handleOpenFile} className={style.addPhoto}>
            {file ? (
              <img src={img} alt="random-photo" />
            ) : (
              <button className="">
                <RxPencil1 className={style.pencil} size={50} color="white" />
                <PiMusicNotesSimpleBold
                  className={style.note}
                  size={50}
                  color="#b3b3b3"
                />
                <p className="text-[#fff] text-6 font-medium text-[16px]">
                  Выбрать фото
                </p>
              </button>
            )}
          </div>
          {/* input */}
          <div className="w-[70%] mt-[25px] pl-[25px]">
              {/* send form */}
              <form onSubmit={submit}> 
              <input
              ref={inputRef}
              onChange={change}
              className="hidden"
              type="file"
              required
            />
              <input
              className="bg-[#545461] w-full h-4 outline-none p-4 text-[#fff] font-medium"
              type="text"
              value={`${test}`}
              onChange={(e) => setTest(e.target.value)}
              required
            />
            <input className="mt-[25px] w-full h-[100px] pb-[80px] pl-[10px] pb-[10px] bg-[#545461] font-medium text-[#fff]" type="area" placeholder="add description"  required/>
            <button type="submit" className="bg-[#fff] w-[150px] h-[50px] rounded-[35px] text-[20px] text-[black] font-bold mt-4 ml-36 hover:bg-[#65D36E] ">Save</button>

              </form>

      
          </div>
       
          
        
        </div>
      
        
      </div>
    </div>
  );
};
