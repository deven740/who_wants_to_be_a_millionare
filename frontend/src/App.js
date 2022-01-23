import logo from "./homepage.png";
import "./App.css";
import Quiz from "./Quiz/Quiz";
import MoneyLadder from "./MoneyLadder/MoneyLadder";
import Game from "./Game/Game";

function App() {
  return (
    <div className="app">
      <Game />
      <MoneyLadder />
    </div>
  );
}

export default App;
