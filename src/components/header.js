import React from "react";
import "./style/header.css"

const Head = props => (
  <div>
    <nav className="navbar sticky-top navbar-light bg-secondary text-light">
        <p className="navbar-brand text-light">Memory Game</p>
        <span>You guessed</span>
        <span className="navbar-text text-light">
            Score: | Top Score:
        </span>
    </nav>
  </div>
);

export default Head;