import React, { useState } from "react";
import "./Topbar.css";
// import Switch from "@material-ui/core/Switch";
// import WbSunnyIcon from "@material-ui/icons/WbSunny";
// import NightsStayIcon from "@material-ui/icons/NightsStay";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "./DataLayer";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
// import Cookies from 'js-cookie'

const linkstyle = {
  textDecoration: "none",
  position: "fixed",
  top: "15px",
  right: "35px",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function Topbar({ changeMode, dark }) {
  const classes = useStyles();
  const [{ logged, username, mood }, dispatch] = useDataLayerValue();
  const [emoji, setEmoji] = useState(" ");
  function handleLogout() {
    var r = window.confirm("Are You Sure?");
    if (r === true) {
      dispatch({
        type: "SET_LOGGED",
        logged: false,
      });
    } else {
      dispatch({
        type: "SET_LOGGED",
        logged: true,
      });
    }
  }
  // console.log("Mood" + mood);
  const ExpressionMap = () => {
    switch (mood) {
      case "neutral":
        setEmoji("🙂");
        break;
      case "happy":
        setEmoji("😄");
        break;
      case "sad":
        setEmoji("😞");
        break;
      case "angry":
        setEmoji("🤬");
        break;
      default:
        setEmoji(" ");
    }
    return emoji && <h3 className="mood">{emoji}</h3>;
  };
  return (
    <div className={dark ? "topbar topbar-dark" : "topbar"}>
      <img
        className="app-logo"
        src="https://i.imgur.com/VjcL8Wz.png"
        alt="App Logo"
      />
      <h1 className="app-name">Music</h1>
      {<ExpressionMap />}
      {/* <div className="switch">
        {dark ? <WbSunnyIcon style={{ color: "white" }} /> : <WbSunnyIcon />}
        <Switch checked={dark} onChange={changeMode} />
        {dark ? (
          <NightsStayIcon style={{ color: "white" }} />
        ) : (
          <NightsStayIcon />
        )}
      </div> */}
      <Tooltip title={username} arrow>
        <Link to={!logged && "/"} style={linkstyle} onClick={handleLogout}>
          <Avatar className={classes.orange}>{username.charAt(0)}</Avatar>
        </Link>
      </Tooltip>
    </div>
  );
}

export default Topbar;
