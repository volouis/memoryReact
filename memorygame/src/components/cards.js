import React from "react";
import "./style/card.css"

const Card = props => (
    <div className="gameSec">
        <button>
            <div className="card">
                <img className="card-img-top" src={props.image} alt="Card"/>
            </div>
        </button>
    </div>
);

export default Card;