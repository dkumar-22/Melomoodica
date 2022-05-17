import "./App.css";
import Player from "./Player";
import Body from "./Body";
import Topbar from "./Topbar";
import { useState } from "react";
import { useDataLayerValue } from "./DataLayer";
import Cookies from 'js-cookie'
function App() {
  const [{songs}] = useDataLayerValue();
  const [dark, setDark] = useState(false);
  Cookies.set('mood','happy');
  function changeMode() {
    console.log("Trigerred");
    setDark((prev) => !prev);
  }
  console.log(songs);

  return (
    <div className="App">
      <Topbar changeMode={changeMode} dark={dark} />
      <Body changeMode={changeMode} dark={dark} />
      <Player changeMode={changeMode} dark={dark} />
    </div>
  );
}

export default App;
