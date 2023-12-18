import React from "react";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <p className="font-bold">1+1</p>
      <div className="flex justify-around">
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="+" />
        <Button text="-" />
        <Button text="*" />
        <Button text="/" />
        <Button text="=" />
        <Button text="clear" />
        <Button text="delete" />
      </div>
    </div>
  );
}

export default App;
