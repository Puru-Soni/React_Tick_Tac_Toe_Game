import React from 'react'

const Square = ({value, onClick}) => {
     // either props.value or destructor and : 
    return (

        // event = onCLick, handler its function. 
        <button type="button" className="square" onClick={ onClick }>
            {value}
        </button>
    )
   
}

export default Square
