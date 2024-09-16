import React, { useState } from "react";
import "./App.css";
import Header from "./components/myHeader"; // importing is the file function by which is exporting by file doesn't matter what name file is exporting

const App = () => {
  const [input, setInput] = useState("");
  const [resultDisplayed, setResultDisplayed] = useState(false);

  const handleNumberClick = (e) => {
    const value = e.target.innerHTML;
    const lastChar = input[input.length - 1];

    if (!resultDisplayed) {
      setInput(input + value);
    } else if (resultDisplayed && ["+", "-", "×", "÷"].includes(lastChar)) {
      setResultDisplayed(false);
      setInput(input + value);
    } else {
      setResultDisplayed(false);
      setInput(value);
    }
  };

  const handleOperatorClick = (e) => {
    const value = e.target.innerHTML;
    const lastChar = input[input.length - 1];

    if (["+", "-", "×", "÷", "="].includes(lastChar)) {
      setInput(input.slice(0, -1) + value);
    } else if (input.length === 0) {
      alert("Enter a number first");
    } else {
      setInput(input + value);
    }
  };

  const handleResultClick = () => {
    if (input.length === 0) {
      alert("Enter a number first");
    }
    
    else {
      const numbers = input.split(/\+|\-|\×|\÷/g);
      const operators = input.replace(/[0-9]|\./g, "").split("");

      let tempNumbers = [...numbers];
      let tempOperators = [...operators];

      const operate = (operator, fn) => {
        let idx = tempOperators.indexOf(operator);
        while (idx !== -1) {
          tempNumbers.splice(
            idx,
            2,
            fn(parseFloat(tempNumbers[idx]), parseFloat(tempNumbers[idx + 1]))
          );
          tempOperators.splice(idx, 1);
          idx = tempOperators.indexOf(operator);
        }
      };

      operate("÷", (a, b) => a / b);
      operate("×", (a, b) => a * b);
      operate("-", (a, b) => a - b);
      operate("+", (a, b) => a + b);

      setInput(Math.round(tempNumbers[0] * 100) / 100);
      setResultDisplayed(true);
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <>
      <Header />
      <div className="calculator">
        <div className="input">{input}</div>
        <div className="buttons">
          <div className="operators">
            <div onClick={handleOperatorClick}>+</div>
            <div onClick={handleOperatorClick}>-</div>
            <div onClick={handleOperatorClick}>×</div>
            <div onClick={handleOperatorClick}>÷</div>
          </div>
          <div className="leftPanel">
            <div className="numbers">
              <div onClick={handleNumberClick}>7</div>
              <div onClick={handleNumberClick}>8</div>
              <div onClick={handleNumberClick}>9</div>
            </div>
            <div className="numbers">
              <div onClick={handleNumberClick}>4</div>
              <div onClick={handleNumberClick}>5</div>
              <div onClick={handleNumberClick}>6</div>
            </div>
            <div className="numbers">
              <div onClick={handleNumberClick}>1</div>
              <div onClick={handleNumberClick}>2</div>
              <div onClick={handleNumberClick}>3</div>
            </div>
            <div className="numbers">
              <div onClick={handleNumberClick}>0</div>
              <div onClick={handleNumberClick}>.</div>
              <div onClick={handleClear}>
                C
              </div>
            </div>
          </div>
          <div className="equal" onClick={handleResultClick} >
            =
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
