import logo from "./logo.svg";
import "./common.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="my-10 flex App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link m-10"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
