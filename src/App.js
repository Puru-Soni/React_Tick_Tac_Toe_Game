import React, { useState } from "react";
import Board from "./components/Board"; 
import { calculateWinner } from "./helper";

import "./styles/root.scss";

const App = () => {
    // (Hooks) useState returns a pair, the current state value and a function, that lets you change the state.
    // useState takes one argument, which is the initial value of the state.
    const [ board, setBoard ] = useState( Array(9).fill(null) );
    const [ isXnext, setIsXNext ] = useState(false);

    // winner calculation
    const winner = calculateWinner(board);

    // Win message
    const message = winner ? `Winner is ${winner}` 
    : `Next Player is ${ isXnext ? "X": "O" }`;

  // Function for handling onClick event at position.
    const handleSquareClick = position => {
        
      // board[position] is not null, i.e their is a X or O, hence onClick event terminates.
      // If we have a winner, winner !== null, exit the game.
      if( board[position] || winner ){
            return;
        }

        // setBoard useState function, update old/previous array to new array on based of onClick event.
        setBoard( (prev)=>{
            return prev.map( (square, pos)=>{
              // if index of current square = position at which onClick event happened, run.
                if( pos === position ){
                    return isXnext ? "X" : "O";
                }
              // else return nothing no updates.
                return square;
            })
        })
        // Changing the X's or O's turn by toggling isXNext useState.
        setIsXNext ( prev => !prev );
    }

  return(
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{ message }</h2>
    <Board board={board} handleSquareClick={handleSquareClick} />
  </div>
  );
}

export default App;
