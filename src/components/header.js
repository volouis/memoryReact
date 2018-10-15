import React from "react";
import "./style/header.css"

const Head = props => (
    <nav className="navbar">
        <p className="navbar-brand text-light">Memory Game</p>
        <span id={props.guess} className="guess" >You guessed {props.guess}!!!</span>
        <span className="navbar-text text-light">
            Score: {props.count} | Top Score: {props.highScore}
        </span>
    </nav>
);

export default Head;