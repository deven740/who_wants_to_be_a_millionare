import React from "react";
import "./Game.css";

function Game() {
  return (
    <div className="game">
      <div className="question">Who wants to be a millionare ?</div>
      <br />
      <div className="options">
        <div className="option">A</div>
        <div className="option">B</div>
        <div className="option">C</div>
        <div className="option">D</div>
      </div>
    </div>
  );
}

export default Game;
