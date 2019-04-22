import React from "react";
import "./style.css";

function Score(props) {
    return (
    <nav class="navbar navbar-secondary sticky-top">
        <span class="navbar-brand mb-0 h1 d-none d-md-block">Memory Game</span>
        <span class="navbar-brand mb-0 h1">{props.message}</span>
        <span class="navbar-brand mb-0 h1">Score: {props.score}</span>
    </nav>
    );
}

export default Score;