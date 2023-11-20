const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for(const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    // Leaving this code for reference on how app was initially developed through the course.
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleClickButton(rowIndex, colIndex) {
    //     setGameBoard((previousGameBoard) => {
    //         const updateBoard = [...previousGameBoard.map(innerArray => [...innerArray])];
    //         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updateBoard;
    //     });

    //     onSelectSquare();
    // }

    // TODO fixc gameBoard thingy

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}