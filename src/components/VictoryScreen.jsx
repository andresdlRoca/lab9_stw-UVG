import "./VictoryScreen.css";
import React from "react";
import victoryroyale from "../assets/victoryroyale.gif";
import ludicolodancing from "../assets/ludicolodancing.gif";

export default function VictoryScreen() {
  return (
    <div className="screen">
      <img className="victoryroyale" src={victoryroyale} alt="Victory screen" />
      <br />
      <img className="ludicolodancing" src={ludicolodancing} alt="Victory screen dancing pokemon" />
    </div>
  );
}
