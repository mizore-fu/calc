import React, { useState } from "react";
import { Button } from "./components/Button";

function App() {
  const [formula, setFormula] = useState<string>("");

  const addToFormula = (value: string) => {
    setFormula((prev) => prev + value);
  };

  const clearFormula = () => {
    setFormula("");
  };

  const deleteFromFormula = () => {
    setFormula((prev) => prev.slice(0, -1));
  };

  return (
    <div className="App">
      <p className="font-bold">{formula}</p>
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
        <Button text="=" onClick={() => {}} />
        <Button text="clear" onClick={clearFormula} />
        <Button text="delete" onClick={deleteFromFormula} />
      </div>
    </div>
  );
}

export default App;
