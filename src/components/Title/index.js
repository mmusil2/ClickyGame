import React from "react";
import "./style.css";

function Title(props) {
  return <div>
    <h1 className="title">{props.children}</h1>
    <h2>Score: {props.score} </h2>
  </div>
}

export default Title;
