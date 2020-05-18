import React from "react";
// import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div>
                {/* Left */}
                <h1>Clicky Game</h1>
            </div>
            <div className={props.start ? "" : "d-none"}>

                {/* Center */}
                {props.correct ? <h3>You guessed correctly</h3> : <h3>You guessed incorrectly</h3>}
            </div>

            <div className={props.start ? "" : "d-none"}>
                {/* Right */}
                {/* Score */}
                <h3>Score: {props.score} | Top Score: {props.topScore}</h3>

                {/* Top Score */}
            </div>

        </nav>
    );
}

export default Nav;