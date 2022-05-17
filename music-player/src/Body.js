import React from "react";
import "./Body.css";
import Playlists from "./Playlists";
import PlaylistsMood from "./PlaylistsMood";
import { useDataLayerValue } from "./DataLayer";
// import Genres from "./Genres";
function Body({ dark, changeMode }) {
  const [{mood}] = useDataLayerValue();
  return (
    <div className={dark ? "body body-dark" : "body"}>
      <div className="body-content">
        {/* <h1>GENRES</h1>
        <Genres /> */}
        <h1 style={{marginTop:"3%"}}>ALL SONGS</h1>
        <Playlists changeMode={changeMode} />
        {mood && <h1>SONGS BASED ON MOOD</h1>}
        <PlaylistsMood changeMode={changeMode} />
      </div>
    </div>
  );
}

export default Body;
