import logo from "./homepage.png";
import "./App.css";
import Quiz from "./Quiz/Quiz";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100%" />
        <Quiz />
      </header>
    </div>
  );
}

export default App;
