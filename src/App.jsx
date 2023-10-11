import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import { Layout } from "./Layout/Layout";
import { useState } from "react";
import { Home } from "./pages/Home/Home";
import { Search } from "./pages/Search/Search";
import { useEffect } from "react";
import { Library } from "./Component/Library/Library";
import { Playlist } from "./pages/Paylist/Playlist";
import { NotFound } from "./pages/NotFound/NotFound";
import { CreatePlaylist } from "./Component/CreatePlaylist/CreatePlaylist";
import { LikedSongs } from "./pages/LikedSongs/LikedSongs";
import { Artist } from "./Component/Artist/Artist";

function App() {


 



  // get user data from header

  // show the search panel if user chose search page
  const [showSearch, setShowSearch] = useState(false);

  // show the library panel if user choose library page

  const [showLibrary, setShowLibrary] = useState(false);

  // get link the playlist
  const [getLink, setGetLink] = useState([]);


  //  get id of artist
  const [getId, setGetId] = useState()

  const location = useLocation();

  // Получаем ссылку на треки через callback из дочерного компонента
  function isGetLinks(track) {
    setGetLink(track);
  }

  function isGetId (id){
    setGetId(id)
    
  }

  useEffect(() => {
    const path = location.pathname;
   
    if (path === "/search") {
      setShowSearch(true);
      setShowLibrary(false);
    } else if (path === "/library") {
      setShowLibrary(true);
      setShowSearch(false);
    } else {
      setShowSearch(false);
      setShowLibrary(false);
    }
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            showSearch={showSearch}
            showLibrary={showLibrary}
            track={isGetLinks}
          />
        }
      >
        <Route index element={<Home isGetId ={isGetId} track={isGetLinks} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library track={isGetLinks} />} />
        <Route path="/playlist" element={<Playlist tracks={getLink} />} />
        <Route path="/artist" element={<Artist getId={getId} />}/>
        <Route path="/createPlaylist" element={<CreatePlaylist />} />
        <Route path="/likedSongs" element={<LikedSongs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
