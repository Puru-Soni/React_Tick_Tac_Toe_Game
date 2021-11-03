import React from 'react'

// History component to display game history
const History = ({ history, moveTo, currentMove }) => {
    return (
        <div className="history-wrapper">
        {/* List of game moves played */}
        <ul className="history">
            {/* history variable imported for binding/linking. */}
        {   history.map((_, move)=>{
                return (
                    // unquie key for each li for indiv. rerender or as React will have to handle all of dynamic elements
                    <li key={move}>    
                        <button type="button" className={`btn-move ${ move === currentMove ? 'active' : '' }`} 
                        onClick = {()=>(moveTo(move))}>
                            { move === 0 ? `Go to Game Start` : `Go to move #${move}` }
                        </button>
                    </li>
                )
            })
        }
        </ul>
        </div>
    )
}

export default History