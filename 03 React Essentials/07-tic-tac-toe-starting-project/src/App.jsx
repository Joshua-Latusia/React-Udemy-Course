import { Player } from "./Components/Player/Player.jsx";
import { GameBoard } from "./Components/GameBoard/GameBoard.jsx";

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player-Jos"
                  symbol="X"/>

          <Player initialName="Player-Kim"
                  symbol="O"/>
        </ol>
        
        <h1>React Tic-Tac-Toe</h1>

        <GameBoard/>
      </div>

    </main>
  )
}

export default App
