import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import "./styles.css";
import { observe } from '../src/components/Game';

function App({knightPosition}) {
  return (
    <div className="App">
      <Main knightPosition={knightPosition}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
observe(knightPosition =>
  ReactDOM.render(<App knightPosition={knightPosition} />, rootElement),
)

