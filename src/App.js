import React, { useState } from "react";
import Board from "./components/Board"; 
import History from './components/History'
import StatusMsg from "./components/StatusMsg";
import { calculateWinner } from "./helper";

import "./styles/root.scss";

const App = () => {

  const [ history, setHistory ] = useState([{board : Array(9).fill(null), isXnext : true}]);
  const [currentMove, setCurrentMove] = useState(0);

  const currGameState = history[currentMove];
  const winner = calculateWinner(currGameState.board);

  const handleSquareClick = (position) => {
    if( currGameState.board[position] || winner ) return ;

    setHistory( (prev)=>{
        const last = prev[prev.length - 1];
        const newBoard = last.board.map( (square, posi)=>{
          if( posi === position ){
            return last.isXnext ? "X" : "O";
          }
          return square;
      })
      return prev.concat({board: newBoard, isXnext: !last.isXnext})
    })
      setCurrentMove(prev => prev+1);
  }

  const moveTo = (move)=>{
    setCurrentMove(move);
  }

  return(
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <StatusMsg winner={winner} currGameState={currGameState} />
    <Board board={currGameState.board} handleSquareClick={handleSquareClick} />
    <History history={history} moveTo={moveTo} currentMove={currentMove} />
  </div>
  );
}

export default App;