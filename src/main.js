import React from "react";
import Board from "./components/Board";
import "./styles.css";

function Main({knightPosition}) {
  return (
    <div className="App">
      <Board knightPosition={knightPosition} />
    </div>
  );
}
export default Main;
