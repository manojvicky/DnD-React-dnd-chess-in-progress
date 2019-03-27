import React from "react";
import Board from "./components/Board";
import "./styles.css";

function Main() {
  return (
    <div className="App">
      <Board knightPosition={[0, 3]} />
    </div>
  );
}
export default Main;
