import React from 'react'

const StatusMsg = ({winner, currGameState})=>{
    // game status message
    // const message = winner ? 
    // `Winner is ${winner}` : 
    // `Play next move ${currGameState.isXnext ? 'X' : 'O'}`;

    // Draw message var
    const noMoveLeft = currGameState.board.every(el=> el !== null);

    return (
        <h2>
        { winner && `winner is ${winner}` }
        { !winner && !noMoveLeft && `Play next move ${currGameState.isXnext ? 'X' : 'O'}` }
        { !winner && noMoveLeft && `Draw!` }
        </h2>
    )
}

export default StatusMsg;