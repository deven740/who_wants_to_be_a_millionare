import logo from "./homepage.png";
import "./App.css";
import Questions from "./Questions/Questions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="100%" />
        <Questions />
      </header>
    </div>
  );
}

export default App;
