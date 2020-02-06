import React from "react";
import "../styles/styles.css";
export default function Square(props) {
  const fill = props.black ? "black" : "white";
  const stroke = props.black ? "white" : "black";
  return (
    <div className="square" onClick={()=>props.handleClick()} style={{ backgroundColor: fill, color: stroke }}>
      {props.children}
    </div>
  );
}
