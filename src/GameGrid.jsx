import TicTacToe from "./TicTacToe";
import Box from "./Box";
import "./GameGrid.css"


export default function GameGrid({ gameArr, updateGameState, winner }) {
    const grid = [];
    for (let b = 0; b < gameArr.length; b++) {
        grid.push(
            <Box
                id={b}
                value={gameArr[b]}
                handleClick={updateGameState}
            />
        );
    }


    return (
        <>
            {winner && <p>You won 🎉🎉🎉!!!!!!!</p>}
            <div className="GameGrid">

                {grid}
            </div>
        </>
    )
}
