import React from 'react'

const StatusMsg = ({winner, currGameState})=>{
    // game status message
    // const message = winner ? 
    // `Winner is ${winner}` : 
    // `Play next move ${currGameState.isXnext ? 'X' : 'O'}`;

    // Draw message var
    const noMoveLeft = currGameState.board.every(el=> el !== null);

    return (
        <div className="status-message">
        { winner && (
            <>
                Winner is{' '}
                <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span>
            </>
        ) }
        { !winner && !noMoveLeft && 
            <>
                Play next move <span className={ currGameState.isXnext ? 'text-green' : 'text-orange' }>
                {currGameState.isXnext ? 'X' : 'O'}</span>
            </>
        }
        { !winner && noMoveLeft && 
            <>
                <span className="text-green">X</span> and <span className="text-orange">O</span> tied
            </>
        }
        </div>
    )
}

export default StatusMsg;