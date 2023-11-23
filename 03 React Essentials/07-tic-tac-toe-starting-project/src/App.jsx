import { Player } from "./Components/Player/Player.jsx";
import { GameBoard } from "./Components/GameBoard/GameBoard.jsx";
import { Log } from "./Components/Log/Log.jsx";
import { useState } from "react";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if( gameTurns.length > 0 && 
      gameTurns[0].player === 'X') {
        currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns(previousTurns => {
      const currentPlayer = deriveActivePlayer(previousTurns);
      
      const updatedTurns = [{ square: { row: rowIndex, 
                                        col: colIndex},
                              player:  currentPlayer }, ...previousTurns];

        return updatedTurns;
      });
    }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player-Jos"
                  symbol="X"
                  isActive={activePlayer === 'X'}/>

          <Player initialName="Player-Kim"
                  symbol="O"
                  isActive={activePlayer === 'O'}/>
        </ol>
        
        <h1>React Tic-Tac-Toe</h1>

        <GameBoard onSelectSquare={handleSelectSquare}
                   turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App;
