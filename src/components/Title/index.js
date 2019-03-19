import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title">
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Street_Fighter_old_logo.png" alt="sflogo"></img>
  <h1 className="title">{props.children}</h1>
    <div className="score">Score: {props.score}</div>
    <div className="score">Highscore: {props.highscore}</div>
  </div>
}

export default Title;
