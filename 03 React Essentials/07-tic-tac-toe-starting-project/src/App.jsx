import { Player } from "./Components/Player/Player.jsx"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player-1"
                  symbol="X"/>

          <Player name="Player-2"
                  symbol="O"/>
        </ol>
        
        <h1>React Tic-Tac-Toe</h1>

        GameBoard
      </div>

      LOG
    </main>
  )
}

export default App
