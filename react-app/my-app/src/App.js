import { createRoot } from 'react-dom/client';

import "./App.css";
import Header from "./components/myHeader"; // importing is the file function by which is exporting by file doesn't matter what name file is exporting
function App() {
  return (
    <>
      <div className="App">
        {/* <Header /> */}
        <header className="App-header">
          {/* <p>Simple React app start with: npm start</p> */}
          
        </header>
      </div>
    </>
  );
}

export default App;
