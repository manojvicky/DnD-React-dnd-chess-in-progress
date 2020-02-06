import React from 'react'
import Square from './Square';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './constants';
import { moveKnight, canMoveKnight } from './Game';

export default function BoardSquare({ x, y, children }) {
    const [getProps, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        canDrop: () => canMoveKnight(x, y),
        drop: () => moveKnight(x, y),
        collect: (moniter) => {
            console.log('moniter in useDrop', moniter.internalMonitor.store.getState());
            return {
                isOver: !!moniter.isOver(),
                canDrop: !!moniter.canDrop()
            }
        }
    });
    const black = (x + y) % 2 === 1;
    console.log('board square', getProps, drop);
    return <div ref={drop}
        style={{
            position: 'relative',
            width: '100%',
            height: '100%',
        }}>
        <Square black={black}>{children}</Square>
        {getProps.isOver && !getProps.canDrop && <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: 'red',
                }}
            />}
      {!getProps.isOver && getProps.canDrop && <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: 'yellow',
                }}
            />}
      {getProps.isOver && getProps.canDrop && <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: 'green',
                }}
            />}
    </div>
}