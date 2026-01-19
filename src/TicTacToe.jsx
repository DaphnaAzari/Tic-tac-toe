import { useState } from "react";
import GameGrid from "./GameGrid";


export default function TicTacToe() {

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const myGameArr = ["", "", "", "", "", "", "", "", ""];
    const [gameArr, setGameArr] = useState(myGameArr);

    const playerOne = "X";
    const playerTwo = "O";

    const [activePlayer, setActivePlayer] = useState(playerOne);

    const setMyGameBoard = (boxId) => {
        setGameArr(gameArr.map((value, index) => {
            return boxId === index ? activePlayer : value
        }))
    };


    const updateActivePlayer = () => {
        if (activePlayer === playerOne) {
            setActivePlayer(playerTwo)
        } else {
            setActivePlayer(playerOne)
        }
    };



    const updateGameState = (boxId) => {
        let playerDidAct = true;

        if (gameArr[boxId] !== "") {
            playerDidAct = false;
        }

        if (playerDidAct) {
            setMyGameBoard(boxId);
            updateActivePlayer();
        }
    };

    let didSomeoneWin = false;
    winningCombos.forEach(winningCombo => {

        const comboCheck = [];

        winningCombo.forEach(indx => {
            comboCheck.push(gameArr[indx])
        })

        //Use combocheck to see if every element is the same
        const winner = comboCheck.every(value => {
            if (value === "") {
                return false
            }
            return value === comboCheck[0]
        })

        if (winner) {
            didSomeoneWin = true;
        }
    });

    return (
        <div className="ticTacToe">
            <GameGrid gameArr={gameArr} updateGameState={updateGameState} winner={didSomeoneWin} />
        </div>
    )
};