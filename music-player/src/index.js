import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";
ReactDOM.render(
    <DataLayer initialState={initialState} reducer={reducer}>
      <Home />
    </DataLayer>,
  document.getElementById("root")
);

