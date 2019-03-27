import React from "react";
import Knight from "./Knight";
import Square from "./Square";
function renderSquare(x, y, positionX, positionY) {
  const black = (x + y) % 2 === 1;
  const isKightHere = x === positionX && y === positionY;
  return <Square black={black}>{isKightHere && <Knight />}</Square>;
}
function Board(props) {
  console.log("this.props", props);
  const squares = [];
  let x = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      x++;
      squares.push(
        renderSquare(i, j, props.knightPosition[0], props.knightPosition[1])
      );
    }
  }
  console.log("==>", squares, x);
  return <div className="board">{squares}</div>;
}
export default Board;
