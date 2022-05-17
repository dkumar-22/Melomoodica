import React from "react";
import "./Playlists.css";
import Playlist from "./Playlist";
import { useDataLayerValue } from "./DataLayer";
// import Cookies from 'js-cookie'
function Playlists() {
  const [{ happy, neutral, angry, sad, mood }] = useDataLayerValue();
  console.log(mood);
  if (mood === "angry")
    return (
      <div className="playlists">
        {angry.map(function (x) {
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
  else if (mood === "sad")
    return (
      <div className="playlists">
        {sad.map(function (x) {
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
}

export default Playlists;
