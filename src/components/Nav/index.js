import React from "react";
// import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div>
                <h1>Clicky Game</h1>
            </div>
            <div className={props.start ? "d-block" : "d-none"}>
                {props.correct ? <h3>You guessed correctly</h3> : <h3>You guessed incorrectly</h3>}
            </div>
            <div className={props.start ? "d-none" : "d-block text-center bg-white px-4 py-2"}>
                <h5>Click on as many images 
                    <br/>as you can without repeating!</h5>
            </div>

            <div>
                <h4>Score: {props.score} | Top Score: {props.topScore}</h4>
            </div>

        </nav>
    );
}

export default Nav;