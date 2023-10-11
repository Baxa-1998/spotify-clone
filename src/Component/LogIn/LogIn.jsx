import React from "react";
import { useContext } from "react";
import { spotify } from "../Context/Spotify.CTX";

export const LogIn = () => {
  const { AUTH_ENDPOINT, client_id, REDIRECT_URI, RESPONSE_TYPE, SCOPES } =
    useContext(spotify);

  return (
    <div className="bg-[black] w-full h-screen flex items-center justify-center">
      <div className="w-[500px] h-[500px] pt-[50px]">
        <div className="flex w-fit h-fit m-auto">
          <img className="w-[50px] h-[50px]" src="./icons/spotify.png" alt="" />
          <h2 className="text-[white] text-[30px] font-medium ml-[5px]">
            Spotify
          </h2>
        </div>
        <h2 className="text-[white] text-[35px] font-medium text-center mt-[35px]">
          Millions of tracks
        </h2>
        <h2 className="text-[white] text-[35px] font-medium text-center ">
          Free in Spotify
        </h2>

        <div className="flex justify-center mt-[35px]">
          <a
            href={`${AUTH_ENDPOINT}?client_id=${client_id}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`}
          >
            <button className="bg-[#65D36E] w-[120px] h-[45px] rounded-[25px] text-[16px] font-bold hover:opacity-[80%]">
              Log in
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
