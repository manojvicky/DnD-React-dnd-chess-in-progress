import React from "react";
import Knight from "./Knight";
// import {moveKnight, canMoveKnight} from "./Game";
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
// function handleKnight(x, y){
//   console.log('handleKnight', x,y, canMoveKnight(x,y));
//   if(canMoveKnight(x, y)){
//     moveKnight(x,y);
//   }
// }

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

function renderSquare(i, positionX, positionY) {
  const x = i % 8;
  const y = Math.floor(i / 8)
  // const black = (x + y) % 2 === 1;
  return <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
    <BoardSquare key={i} x={x} y={y}> {renderPiece(x, y, [positionX, positionY])} </BoardSquare>
  </div>
}
function Board(props) {
  console.log("this.props", props);
  const squares = [];
  let x = 0;
  for (let i = 0; i < 64; i++) {
    squares.push(
      renderSquare(i, props.knightPosition[0], props.knightPosition[1])
    );
  }
  console.log("==>", squares, x);
  return <div className="board">
    <DndProvider backend={Backend}>
      {squares}
    </DndProvider>
  </div>;
}
export default Board;
