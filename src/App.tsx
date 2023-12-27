import React, { useState } from "react";
import axios from "axios";
import { Button } from "./components/Button";
import { BE_URL } from "./constants";

function App() {
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const addToFormula = (value: string) => {
    setErrorMessage("");
    setInputValues((prev) => [...prev, value]);
  };

  const clearFormula = () => {
    setErrorMessage("");
    setInputValues([]);
  };

  const deleteFromFormula = () => {
    setErrorMessage("");
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
      })
      .catch(({ response }) => {
        setErrorMessage(response["data"]);
      });
  };

  return (
    <div className="App min-h-screen bg-gray-800 flex justify-center">
      <div className="w-80 p-2 space-y-2">
        <p className="h-14 p-2 rounded-md bg-white text-xl text-right leading-10">
          {displayFormula()}
        </p>
        <div className="space-y-1">
          <div className="flex space-x-1">
            <Button text="7" onClick={() => addToFormula("7")} />
            <Button text="8" onClick={() => addToFormula("8")} />
            <Button text="9" onClick={() => addToFormula("9")} />
            <Button text="/" onClick={() => addToFormula("/")} />
          </div>
          <div className="flex space-x-1">
            <Button text="4" onClick={() => addToFormula("4")} />
            <Button text="5" onClick={() => addToFormula("5")} />
            <Button text="6" onClick={() => addToFormula("6")} />
            <Button text="*" onClick={() => addToFormula("*")} />
          </div>
          <div className="flex space-x-1">
            <Button text="1" onClick={() => addToFormula("1")} />
            <Button text="2" onClick={() => addToFormula("2")} />
            <Button text="3" onClick={() => addToFormula("3")} />
            <Button text="-" onClick={() => addToFormula("-")} />
          </div>
          <div className="flex space-x-1">
            <Button text="0" onClick={() => addToFormula("0")} />
            <Button text="DEL" onClick={deleteFromFormula} />
            <Button text="AC" onClick={clearFormula} />
            <Button text="+" onClick={() => addToFormula("+")} />
          </div>
          <div>
            <Button text="=" onClick={calcFormula} />
          </div>
        </div>
        <p className="h-14 text-center text-red-500">{errorMessage}</p>
      </div>
    </div>
  );
}

export default App;
