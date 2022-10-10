import React from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";

function App() {
  const [data, setData] = useState("0");

  //handle operators button click
  const handleOperator = (e) => {
    if (data === "0") {
      return data;
    } else if (data !== "0") {
      return setData(data + e.target.value);
    }
  };

  //handle clear button
  const clear = () => {
    setData("0");
  };

  //handle equal button
  const equal = (e) => {
    e.preventDefault();
    setData(
      // eslint-disable-next-line no-eval
      String(eval(data)).length > 3 && String(eval(data)).includes(".") ? String(eval(data).toFixed(3)) : String(eval(data))
    );
  };

  //handle numbers button click
  const value = (e) => {
    if (data === "0" && e.target.value === "0") {
      return data;
    } else if (data === "0" && e.target.value === ".") {
      return setData(data + e.target.value);
    } else if (data === "0") {
      setData(e.target.value);
    } else if (data.includes(".") && e.target.value === ".") {
      return data;
    } else {
      setData(data + e.target.value);
    }
  };
  

  return (
    <>
      <main className="calculator-container">
        <h1>Calculator</h1>
        <div className="output">{data}</div>
        <div className="row-1">
          <button onClick={value} value="7">
            7
          </button>
          <button onClick={value} value="8">
            8
          </button>
          <button onClick={value} value="9">
            9
          </button>
          <button onClick={handleOperator} value="/">
            ÷
          </button>
        </div>

        <div className="row-2">
          <button onClick={value} value="4">
            4
          </button>
          <button onClick={value} value="5">
            5
          </button>
          <button onClick={value} value="6">
            6
          </button>
          <button onClick={handleOperator} value="*">
            x
          </button>
        </div>

        <div className="row-3">
          <button onClick={value} value="1">
            1
          </button>
          <button onClick={value} value="2">
            2
          </button>
          <button onClick={value} value="3">
            3
          </button>
          <button onClick={handleOperator} value="-">
            -
          </button>
        </div>
        <div className="row-4">
          <button onClick={value} value="0" className="zero">
            0
          </button>
          <button onClick={value} value="." className="decimal">
            .
          </button>
        </div>
        <div className="row-5">
          <button onClick={clear} className="clear">
            C
          </button>
          <button onClick={equal} className="equal">
            =
          </button>
          <button onClick={handleOperator} value="+" className="plus">
            +
          </button>
        </div>
      <Footer />
      </main>
    </>
  );
}

export default App;
