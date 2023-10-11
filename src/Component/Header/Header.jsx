import React, { useEffect } from "react";
import style from "./Header.module.scss";
import axios from "axios";
import { useContext } from "react";
import { tokenCTX } from "../Context/Token";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DropDown } from "../UI/DropDown/DropDown";
import { userDataInfo } from "../Context/UserDataCTX";
import { useHttp } from "../../hook/http.hook";
import { Preloader } from "../Preloader/Preloader";
import { SearchFrom } from "../SearchForm/SearchFrom";

export const Header = ({
  handleDropMenu,
  dropMenu,
  showSearch,
  showLibrary,
  goBack,
  next,
}) => {
  const token = useContext(tokenCTX);
  const {loading, request, error} = useHttp()

  // const [userData, setUserData] = useState([]);

  const { setUserData, userData } = useContext(userDataInfo);

  const [handleSelect, setHandleSelect] = useState([
    { id: 1, link: "Playlis", active: true },
    { id: 2, link: "Podcast", active: false },
    { id: 3, link: "Artist", active: false },
    { id: 4, link: "Albums", active: false },
  ]);

  function isActiveSelect(itemId) {
    const updateArray = handleSelect.map((item) => {
      if (item.id === itemId) {
        return { ...item, active: true };
      }
      return { ...item, active: false };
    });

    setHandleSelect(updateArray);
  }

  function logOut() {
    window.localStorage.clear();
  }
  // get user data
  useEffect(() => {

    request(`https://api.spotify.com/v1/me`)
    .then(res => setUserData(res))
    
    // axios
    //   .get("https://api.spotify.com/v1/me", {
    //     headers: { Authorization: `Bearer ${token}` },
    //   })
    //   .then((res) => setUserData(res.data));
  }, []);

  

  return (
    <div className="relative">
      <div
        className={`${style.header} ${
          showSearch || showLibrary ? style.backActive : ""
        }`}
      >
        <div className="flex h-fit ">
          <img
            onClick={goBack}
            src="./icons/back.svg"
            className="hover:opacity-[70%] cursor-pointer"
            alt=""
          />
          <img
            onClick={next}
            src="./icons/forward.svg"
            className="ml-[25px] hover:opacity-[70%] cursor-pointer"
            alt=""
          />

       
          <SearchFrom showSearch={showSearch}/>

          {/* library panel */}
          <ul
            className={`flex items-center ml-[70px] ${
              showLibrary ? "block" : "hidden"
            }`}
          >
            {handleSelect.map((select) => (
              <Link
                to="#"
                onClick={() => isActiveSelect(select.id)}
                key={select.id}
                className={`pl-[19px] pr-[19px] pb-[16px] pt-[16px] rounded-[4px] ml-[12px] ${
                  select.active ? "bg-[gray]" : ""
                }`}
              >
                <li className="text-[18px] font-bold text-[#fff]">
                  {select.link}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div
          onClick={handleDropMenu}
          className="w-fit z-[999] h-[38px] bg-[black] rounded-[40px] pl-[3px] pr-[12px] pt-[2px] justify-between flex items-center cursor-pointer"
        >
          <div className="rounded-full bg-none w-[34px] h-[34px]">
            <img
              className="rounded-[50%]"
              src={userData.images?.[0]?.url}
              alt=""
            />
          </div>

          <p className="font-bold text-[18px] text-[18px] text-[white]">
            {userData.display_name}
          </p>

          <img src="./icons/down.png" alt="" />
        </div>
        <DropDown logOut={logOut} dropMenu={dropMenu} />
      </div>
    </div>
  );
};
