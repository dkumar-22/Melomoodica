import React from "react";
import "./Playlists.css";
import Playlist from "./Playlist";
import { useDataLayerValue } from "./DataLayer";
function Playlists({ mood }) {
  const [{ happy, neutral }] = useDataLayerValue();
  console.log(mood);
  if (mood === "neutral")
    return (
      <div className="playlists">
        {neutral.map(function (x) {
          return (
            <Playlist
              key={x._id}
              icon={x.cover}
              mood={x.mood}
              name={x.name}
              link={x.link}
              en={x}
            />
          );
        })}
      </div>
    );
   else if (mood === "happy")
    return (
      <div className="playlists">
        {happy.map(function (x) {
          return (
            <Playlist
              key={x._id}
              icon={x.cover}
              mood={x.mood}
              name={x.name}
              link={x.link}
              en={x}
            />
          );
        })}
      </div>
    );
  else
        return <></>
}

export default Playlists;
