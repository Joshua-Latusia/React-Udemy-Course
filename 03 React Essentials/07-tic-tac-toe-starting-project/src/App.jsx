import { Player } from "./Components/Player/Player.jsx";
import { GameBoard } from "./Components/GameBoard/GameBoard.jsx";
import { useState } from "react";


function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
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
                   activePlayerSymbol={activePlayer}/>
      </div>

    </main>
  )
}

export default App
