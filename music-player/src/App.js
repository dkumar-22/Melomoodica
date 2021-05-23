import "./App.css";
import Player from "./Player";
import Body from "./Body";
import Topbar from "./Topbar";
import { useState } from "react";
import { useDataLayerValue } from "./DataLayer";
function App() {
  const [{songs}] = useDataLayerValue();
  const [dark, setDark] = useState(false);
  const [mood, setMood] = useState("happy");
  function changeMode() {
    console.log("Trigerred");
    setDark((prev) => !prev);
  }
  console.log(songs);

  return (
    <div className="App">
      <Topbar changeMode={changeMode} dark={dark} mood={mood} />
      <Body changeMode={changeMode} mood={mood} dark={dark} />
      <Player changeMode={changeMode} dark={dark} mood={mood} setMood={setMood} />
    </div>
  );
}

export default App;
