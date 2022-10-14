import React from "react";
import { useState, useEffect } from "react";
import "../styles.css";

function Calculator() {
  const [prevState, setPrevState] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [num, setNum] = useState("");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (currentState.includes(".") && e.target.innerText === ".") return;
    if (currentState === "0" && e.target.innerText === "0") return currentState;
    if (currentState === "" && e.target.innerText === ".") return currentState;

    if (total) {
      setPrevState("");
    }

    currentState
      ? setCurrentState((pre) => pre + e.target.innerText)
      : setCurrentState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setNum(currentState);
  }, [currentState]);

  useEffect(() => {
    setNum("");
  }, []);

  const operators = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (currentState === "") return;
    if (prevState !== "") {
      equals();
    } else {
      setPrevState(currentState);
      setCurrentState("");
    }
  };

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "÷":
        cal = String(parseFloat(prevState) / parseFloat(currentState));
        break;

      case "+":
        cal = String(parseFloat(prevState) + parseFloat(currentState));
        break;
      case "x":
        cal = String(parseFloat(prevState) * parseFloat(currentState));
        break;
      case "-":
        cal = String(parseFloat(prevState) - parseFloat(currentState));
        break;
      default:
        return;
    }
    setNum("");
    setPrevState(cal);
    setCurrentState("");
  };

  const reset = () => {
    setPrevState("");
    setCurrentState("");
    setNum("");
  };

  return (
    <>
      <main className="calculator-container">
        <h1>Calculator</h1>
        <div className="output">
          {num !== "" || num === "0" ? num : prevState}
        </div>
        <div className="row-1">
          <button onClick={inputNum}>7</button>
          <button onClick={inputNum}>8</button>
          <button onClick={inputNum}>9</button>
          <button onClick={operators} className="operator">
            ÷
          </button>
        </div>

        <div className="row-2">
          <button onClick={inputNum}>4</button>
          <button onClick={inputNum}>5</button>
          <button onClick={inputNum}>6</button>
          <button onClick={operators} className="operator">
            x
          </button>
        </div>

        <div className="row-3">
          <button onClick={inputNum}>1</button>
          <button onClick={inputNum}>2</button>
          <button onClick={inputNum}>3</button>
          <button onClick={operators} className="operator">
            -
          </button>
        </div>
        <div className="row-4">
          <button onClick={inputNum} className="zero">
            0
          </button>
          <button onClick={inputNum} className="decimal">
            .
          </button>
        </div>
        <div className="row-5">
          <button onClick={reset} className="clear">
            C
          </button>
          <button onClick={equals} className="equal">
            =
          </button>
          <button onClick={operators} className="plus operator">
            +
          </button>
        </div>
      </main>
    </>
  );
}
export default Calculator;
