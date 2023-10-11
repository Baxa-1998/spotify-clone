import React, { useState } from "react";
import { Navbar } from "../Component/Navbar/Navbar";
import { Header } from "../Component/Header/Header";
import { Drawer } from "../Component/Drawer/Drawer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../Component/Footer/Footer";
import { searchCTX } from "../Component/Context/SearchCTX";
import { useEffect } from "react";
import { tokenCTX } from "../Component/Context/Token";
import { LogIn } from "../Component/LogIn/LogIn";
import { currentPlay } from "../Component/Context/CurrentTrack.CTX";
import { userDataInfo } from "../Component/Context/UserDataCTX";
import { playlistCTX } from "../Component/Context/PlaylistCTX";
import { likedSongsCTX } from "../Component/Context/LikedSongsCTX";

export const Layout = ({ showSearch, showLibrary, track }) => {
  // search in spotify
  const [selectedSort, setSelectedSort] = useState("");

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const next = () => {
    navigate(1);
  };

  const [spotifySearchQuery, setSpotifySearchQuery] = useState("");

  //  search input

  const [searchQuery, setSearchQuery] = useState("");

  const [dropMenu, setDropMenu] = useState(false);

  // save token
  const [detectToken, setDetectToken] = useState("");

  // get tracks from spotify API
  const [getTracks, setGetTracks] = useState([]);


  // for save old array + works with function isSort
  const [originalData, setOriginalData] = useState([]);

  // handle drawer state
  const [drawerState, setDrawerState] = useState(false);
  // get liked songs
  const [likedSongs, setLikedSongs] = useState([]);

  // open and close functions of drawer
  const openDrawer = () => setDrawerState(true);
  const closeDrawer = () => setDrawerState(false);

  // GET USER DATA
  const [userData, setUserData] = useState([]);
  // PLAYLIST FETCH RESPONSE
  const [mixArray, setMixArray] = useState([]);

  const [selectTrack, setSelectTrack] = useState({
    name: "",
    img: "",
    uri: "",
    duration_ms: "",
    album: "",
    bigImg: "",
    artist: "",
    id: "",
  });

  // const [drawer, setDrawer] = useState(false)

  // const openDrawer = () => setDrawer(true)
  // const closeDrawer = () => setDrawer(false)

  function handleDropMenu() {
    setDropMenu((prev) => {
      return !prev;
    });
  }

  function isSort(sort) {
    setSelectedSort(sort);
    setOriginalData([...getTracks]); // sorted by name
    if (sort === "name") {
      setGetTracks(
        [...getTracks].sort((a, b) =>
          a.track[sort].localeCompare(b.track[sort])
        )
      );
    }
    // sorted by albums
    else if (sort === "album") {
      setGetTracks(
        [...getTracks].sort((a, b) =>
          a.track.album.name.localeCompare(b.track.album.name)
        )
      );
    }
    // sorted by artist
    else if (sort === "artist") {
      setGetTracks(
        [...getTracks].sort((a, b) =>
          a.track.artists[0].name.localeCompare(b.track.artists[0].name)
        )
      );
    }
    // old array
    else if (sort === "custom") {
      setGetTracks(originalData);
    }
  }

  useEffect(() => {
    let hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.href = "";
      window.localStorage.setItem("token", token);
    }
    setDetectToken(token);
  }, []);

  if (!detectToken) {
    return <LogIn />;
  }
  return (
    <tokenCTX.Provider value={detectToken}>
      <userDataInfo.Provider value={{ setUserData, userData }}>
        <playlistCTX.Provider
          value={{
            setMixArray,
            mixArray,
            getTracks,
            setGetTracks,
            originalData,
            setOriginalData,
            isSort,
            selectedSort,
            searchQuery,
            setSearchQuery,
          }}
        >
          <searchCTX.Provider
            value={{ spotifySearchQuery, setSpotifySearchQuery }}
          >
            <currentPlay.Provider value={{ selectTrack, setSelectTrack }}>
              <likedSongsCTX.Provider value={{ likedSongs, setLikedSongs }}>
                <>
                  {" "}
                  <div className="flex">
                    <Navbar track={track} />

                    <main className="w-[80%] bg-[#121212]">
                      <Header
                        dropMenu={dropMenu}
                        showSearch={showSearch}
                        showLibrary={showLibrary}
                        handleDropMenu={handleDropMenu}
                        next={next}
                        goBack={goBack}
                      />

                      <Outlet />
                    </main>
                    <Drawer
                      closeDrawer={closeDrawer}
                      drawerState={drawerState}
                    />
                  </div>
                  <Footer openDrawer={openDrawer} />
                </>
              </likedSongsCTX.Provider>
            </currentPlay.Provider>
          </searchCTX.Provider>
        </playlistCTX.Provider>
      </userDataInfo.Provider>
    </tokenCTX.Provider>
  );
};
