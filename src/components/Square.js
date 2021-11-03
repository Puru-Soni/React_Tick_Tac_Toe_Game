import React from 'react'

const Square = ({value, onClick, isWinningSquare}) => {
     // either props.value or destructor and : 
    return (
        // event = onCLick, handler its function. 
        <button type="button" className="square" onClick={ onClick }
        style = {{
           fontWeight : isWinningSquare ? 'bold' : 'normal' 
        }}>
        {value}
        </button>
    )
   
}

export default Square
