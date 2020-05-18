import React from "react";
import "./style.css";

export default function Picture (props) {
    return (
        <div className="picture" onClick={() => props.onClick(props.id)}>
            {/* <div className="img-container"> */}
            <img alt={props.name} src={props.image} />
            {/* </div> */}
        </div>
    )
}