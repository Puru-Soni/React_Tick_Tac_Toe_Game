import React from 'react'
// Getting Hooks for functional component, while States is used for class components
import Square from './Square'

const Board = ( {board, handleSquareClick , winningSquare} ) => {

    const renderSquare = (position)=>{

        const isWinningSquare = winningSquare.includes(position);

        return <Square value={board[position]} onClick = {()=> handleSquareClick(position)} isWinningSquare={isWinningSquare}/>
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

export default Board;
