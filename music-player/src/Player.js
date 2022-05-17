import React,{useState} from "react";
import "./Player.css";
import { Grid } from "@material-ui/core";
import AudioPlayer from "react-h5-audio-player";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import "react-h5-audio-player/lib/styles.css";
import { useDataLayerValue } from "./DataLayer";
import MoodIcon from "@material-ui/icons/Mood";
import MoodDetection from "./MoodDetection";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
function Player({ dark }) {
  const [{ currentSong }] = useDataLayerValue();
  const [popup, setpopup] = useState(false);
  function popout() {
    setpopup((prev) => !prev);
  }
  return (
    <div className={dark ? "player player-dark" : "player"}>
      <div className="footer-left">
        <img
          className={dark ? "song-cover" : "song-cover"}
          src={currentSong.cover}
          alt=""
        />
        <p className={dark ? "song-name" : "song-name"}>{currentSong.name}</p>
        <p className={dark ? "artist-name" : "artist-name"}>
          {currentSong.singer}
        </p>
      </div>
      <div className="audio-player-r">
        <AudioPlayer
          autoPlay
          src={currentSong.link}
          onPlay={(e) => console.log("onPlay")}
          defaultCurrentTime="00:00"
          defaultDuration="00:00"
          style={
            dark
              ? { backgroundColor: "black" }
              : { backgroundColor: "white", boxShadow: "none" }
          }
          customIcons={{
            play: (
              <PlayCircleFilledIcon
                fontSize="large"
                style={{ color: "#F50057" }}
              />
            ),
            pause: (
              <PauseCircleFilledIcon
                fontSize="large"
                style={{ color: "#F50057" }}
              />
            ),
          }}
        />
      </div>
      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <div>
              <div className={popup ? "popupshow" : "popuphide"}>
                {popup && (
                  <MoodDetection
                    popout={popout}
                  />
                )}
              </div>
              <MoodIcon
                className={dark ? "hovericon ico ico-dark" : "hovericon ico"}
                fontSize="small"
                onClick={popout}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Player;
