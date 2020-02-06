import React from "react";
import "../styles/styles.css";
import {useDrag} from 'react-dnd';
import {ItemTypes} from './constants';

export default function Knight(props) {
  const [getProps, drag] = useDrag({
    item: {
      type: ItemTypes.KNIGHT
    },
    collect: (moniter)=>{
      console.log('moniter in useDrag', moniter);
      return{
        isDragging: !!moniter.isDragging()
      }
    }
  });
  console.log('Knight', getProps, drag);
  return (
    <span className="knight" ref={drag}
    style={{
      opacity: getProps.isDragging ? 0.5 : 1,
      fontSize: 25,
      fontWeight: 'bold',
      cursor: 'move',
    }}>
      ♘
    </span>
  );
}
