import React, { useState } from "react";
import Board from "./components/Board"; 
import { calculateWinner } from "./helper";

import "./styles/root.scss";

const App = () => {
    // (Hooks) useState returns a pair, the current state value and a function, that lets you change the state.
    // useState takes one argument, which is the initial value of the state.
    
    // Keeping track of history, hooks
    const [ history, setHistory ] = useState([{board : Array(9).fill(null), isXnext : true}]);

    // Track of moves/ steps
    const [currentMove, setCurrentMove] = useState(0);

    console.log(history);
    // Track of game state
    const currGameState = history[currentMove];

    // winner calculation
    const winner = calculateWinner(currGameState.board);

    // Win message
    const message = winner ? `Winner is ${winner}` 
    : `Next Player is ${ currGameState.isXnext ? "X": "O" }`;

  // Function for handling onClick event at position.
    const handleSquareClick = (position) => {
        
      // board[position] is not null, i.e their is a X or O, hence onClick event terminates.
      // If we have a winner, winner !== null, exit the game.
      if( currGameState.board[position] || winner ) return ;

      // setBoard useState function, update old/previous array to new array on based of onClick event.
      setHistory( (prev)=>{
          const last = prev[prev.length - 1];

          const newBoard = last.board.map( (square, posi)=>{
            // if index of currGameState square = position at which onClick event happened, run.
            if( posi === position ){
              return last.isXnext ? "X" : "O";
            }
            // else return nothing no updates.
            return square;
        })
        return prev.concat({board: newBoard, isXnext: !last.isXnext})
      })
        // Changing the prev index of current game state.
        setCurrentMove(prev => prev+1);
    }

  return(
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>{ message }</h2>
    <Board board={currGameState.board} handleSquareClick={handleSquareClick} />
  </div>
  );
}

export default App;