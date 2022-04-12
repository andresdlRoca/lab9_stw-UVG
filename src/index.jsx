/* eslint-disable import/extensions */
import React from "react";
import ReactDOM from "react-dom";
import GameHooks from "./components/GameHooks.jsx";
import "./index.css";
import background from "./assets/background.png";

ReactDOM.render(
  <>
    <img id="background" src={background} alt="Background" />
    <GameHooks />
  </>,

  document.getElementById("game"),
);
