import React from 'react'

const Square = ({value}) => {
     // either props.value or destructor and : 
    return (
        <button type="button" className="square">{value}</button>
    )
   
}

export default Square
