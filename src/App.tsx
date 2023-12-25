import React, { useState } from "react";
import axios from "axios";
import { Button } from "./components/Button";
import { BE_URL } from "./constants";

function App() {
  const [inputValues, setInputValues] = useState<string[]>([]);

  const addToFormula = (value: string) => {
    setInputValues((prev) => [...prev, value]);
  };

  const clearFormula = () => {
    setInputValues([]);
  };

  const deleteFromFormula = () => {
    setInputValues((prev) => prev.slice(0, -1));
  };

  const displayFormula = () => {
    let displayedFormula = "";
    for (let i = 0; i < inputValues.length; i++) {
      displayedFormula += inputValues[i];
    }
    return displayedFormula;
  };

  const calcFormula = () => {
    const values: string[] = [];
    let numberStr = "";
    for (let i = 0; i < inputValues.length; i++) {
      const value = inputValues[i];
      if (/[\+\-\*\/]/.test(value)) {
        values.push(numberStr);
        values.push(value);
        numberStr = "";
        continue;
      }
      numberStr += value;
    }
    values.push(numberStr);
    axios
      .post(`${BE_URL}/calc`, {
        values: values,
      })
      .then(({ data }) => {
        setInputValues(data["values"]);
      });
  };

  return (
    <div className="App">
      <p className="font-bold">{displayFormula()}</p>
      <div className="flex justify-around">
        <Button text="1" onClick={() => addToFormula("1")} />
        <Button text="2" onClick={() => addToFormula("2")} />
        <Button text="3" onClick={() => addToFormula("3")} />
        <Button text="4" onClick={() => addToFormula("4")} />
        <Button text="5" onClick={() => addToFormula("5")} />
        <Button text="6" onClick={() => addToFormula("6")} />
        <Button text="7" onClick={() => addToFormula("7")} />
        <Button text="8" onClick={() => addToFormula("8")} />
        <Button text="9" onClick={() => addToFormula("9")} />
        <Button text="+" onClick={() => addToFormula("+")} />
        <Button text="-" onClick={() => addToFormula("-")} />
        <Button text="*" onClick={() => addToFormula("*")} />
        <Button text="/" onClick={() => addToFormula("/")} />
        <Button text="=" onClick={calcFormula} />
        <Button text="clear" onClick={clearFormula} />
        <Button text="delete" onClick={deleteFromFormula} />
      </div>
    </div>
  );
}

export default App;
