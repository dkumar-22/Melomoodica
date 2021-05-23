import React from "react";
import "./Playlist.css";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
function Playlist({ icon, name, en }) {
  const [, dispatch] = useDataLayerValue();
  function handleC() {
    dispatch({
      type: "SET_CSONG",
      currentSong: en,
    });
    dispatch({
      type: "SET_PLAYING",
      playing: true,
    });
    dispatch({
      type: "SET_FLAG",
      flag: 1,
    });
  }
  return (
    <div className="playlist">
      <div className="pp">
        <h5 className="plt" style={{ color: "white" }}>
          {name}
        </h5>
        <PlayCircleFilledIcon
          fontSize="small"
          className="hovericon play pcfi"
          onClick={handleC}
        />
      </div>

      <img className="icon" src={icon} alt="icon" />
    </div>
  );
}

export default Playlist;
