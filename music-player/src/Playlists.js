import React from "react";
import "./Playlists.css";
import Playlist from "./Playlist";
import { useDataLayerValue } from "./DataLayer";
function Playlists({mood}) {
  const [{ songs }] = useDataLayerValue();
  return (
    <div className="playlists">
      {songs.map(function (x) {
        return (
          <Playlist
            key={x._id}
            icon={x.cover}
            mood={x.mood}
            name={x.name}
            link={x.link}
            en={x}
          />
        )
      })}
    </div>
  );
}

export default Playlists;
