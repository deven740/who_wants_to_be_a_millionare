import logo from "./homepage.png";
import "./App.css";
import Quiz from "./Quiz/Quiz";
import MoneyLadder from "./MoneyLadder/MoneyLadder";
import Game from "./Game/Game";
import React, { useState } from "react";

function App() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(null);

  const getNumberOfQuestions = (arrayLength) => {
    console.log(arrayLength);
  };

  return (
    <div className="app">
      <Game getNumberOfQuestions={getNumberOfQuestions} />
      <MoneyLadder />
    </div>
  );
}

export default App;
