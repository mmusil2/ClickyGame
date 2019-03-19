import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title">
  <h1 className="title">{props.children}</h1>
    <div className="score">Score: {props.score}</div>
    <div className="score">Highscore: {props.highscore}</div>
  </div>
}

export default Title;
