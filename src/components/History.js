import React from 'react'

// History component to display game history
const History = ({ history, moveTo, currentMove }) => {
    return (
        // List of game moves played
        <ul>
            {/* history variable imported for binding/linking. */}
        {   history.map((_, move)=>{
                return (
                    // unquie key for each li for indiv. rerender or as React will have to handle all of dynamic elements
                    <li key={move}>    
                        <button type="button" 
                        style = {{
                            fontWeight : move === currentMove ? 'bold' : 'normal'
                        }}
                        onClick = {()=>(moveTo(move))}>
                            { move === 0 ? `Go to Game Start` : `Go to move #${move}` }
                        </button>
                    </li>
                )
            })
        }
        </ul>
    )
}

export default History