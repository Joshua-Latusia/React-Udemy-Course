import { Player } from "./Components/Player/Player.jsx";
import { GameBoard } from "./Components/GameBoard/GameBoard.jsx";
import { Log } from "./Components/Log/Log.jsx";
import { useState } from "react";


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns(previousTurns => {
      let currentPlayer = 'X';

      if( previousTurns.length > 0 && 
          previousTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

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
