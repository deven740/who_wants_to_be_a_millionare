import logo from "./homepage.png";
import "./App.css";
import Quiz from "./Quiz/Quiz";
import MoneyLadder from "./MoneyLadder/MoneyLadder";

function App() {
  return (
    <div className="app">
      <div className="game">game</div>
      <MoneyLadder />
    </div>
  );
}

export default App;
