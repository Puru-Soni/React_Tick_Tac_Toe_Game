import React, { useState } from 'react'
// Getting Hooks for functional component, while States is used for class components
import Square from './Square'

const Board = () => {

    // (Hooks) useState returns a pair, the current state value and a function, that lets you change the state.
    // useState takes one argument, which is the initial value of the state.
    const [ board, setBoard ] = useState( Array(9).fill(null) );
    const [ isXnext, setIsXNext ] = useState(false);

    const handleSquareClick = position => {
        if( board[position] ){
            return;
        }

        
        setBoard( (prev)=>{
            return prev.map( (square, pos)=>{
                if( pos === position){
                    return isXnext ? "X" : "O";
                }
                return square;
            })
        })
        setIsXNext ( prev => !prev );
    }

    const renderSquare = (position)=>{
        return <Square value={board[position]} onClick = {()=> handleSquareClick(position)}/>
    }

    return (
        <div className="board">
            {/* Tiles, div = row, button = click-able tiles */}
            
            <div className="board-row">
                { renderSquare(0) }
                { renderSquare(1) }
                { renderSquare(2) }
            </div>
            <div className="board-row">
                { renderSquare(3) }
                { renderSquare(4) }
                { renderSquare(5) }
            </div>
            <div className="board-row">
                { renderSquare(6) }
                { renderSquare(7) }
                { renderSquare(8) } 
            </div>

        </div>
    )
}

export default Board
