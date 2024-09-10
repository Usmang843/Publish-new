import logo from "./logo.svg";
import "./App.css";
import Header from "./components/myHeader"; // importing is the file function by which is exporting by file doesn't matter what name file is exporting
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Simple React app start with: npm start</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
