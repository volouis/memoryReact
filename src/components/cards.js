import React from "react";
import "./style/card.css"

const Card = props => (
    <button className="btn" val={props.id} onClick={() => props.beenClick(props.id)}>
        <div className="card">
            <img className="card-img-top" src={props.image} alt="Card"/>
        </div>
    </button>
);

export default Card;