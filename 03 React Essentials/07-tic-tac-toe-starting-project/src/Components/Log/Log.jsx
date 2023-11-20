export function Log({ turns }) {
    return (
        <div>
            <h1>Log</h1>
            <ol id="log">
                {turns.map(turn => <li key={`${turn.square.row},${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col} </li>)}
            </ol>
        </div>
        
    );
}