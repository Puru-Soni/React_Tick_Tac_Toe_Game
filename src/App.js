import React, { useState } from "react";
import Board from "./components/Board"; 
import History from './components/History'
import StatusMsg from "./components/StatusMsg";
import { calculateWinner } from "./helper";

import "./styles/root.scss";

const NEW_GAME = [{board : Array(9).fill(null), isXnext : true},]
const App = () => {

  const [ history, setHistory ] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const currGameState = history[currentMove];
  const {winner, winningSquare}= calculateWinner(currGameState.board);

  function handleSquareClick(position) {
    if (currGameState.board[position] || winner)
      return;

    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, posi) => {
        if (posi === position) {
          return last.isXnext ? "X" : "O";
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXnext: !last.isXnext });
    });
    setCurrentMove(prev => prev + 1);
  }

  const moveTo = (move)=>{
    setCurrentMove(move);
  }

  const onNewGame = ()=>{
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  return(
  <div className="app">
    <h1>TIC <span className="text-green">TAC</span> TOE</h1>
    <StatusMsg winner={winner} currGameState={currGameState} />
    <Board board={currGameState.board} handleSquareClick={handleSquareClick} winningSquare={winningSquare} />
    <button type="button" onClick={ onNewGame } className={`btn-reset ${winner ? 'active' : ''}`}>Start New Game</button>
    <h4 style={{
      fontWeight : 'normal'
    }}>Current Game History</h4>
    <History  history={history} moveTo={moveTo} currentMove={currentMove} />
    <div className="bg-balls"/>
  </div>
  );
}

export default App;