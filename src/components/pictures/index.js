import React from "react";
import "./style.css";

function Picture(props) {
    return (
        <div className = "col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4" onClick={() => props.handleClick(props.id)}>
            <img src={props.image} alt={props.name} class="img-fluid img-thumbnail shadow"></img>
        </div>
    );
}

export default Picture;