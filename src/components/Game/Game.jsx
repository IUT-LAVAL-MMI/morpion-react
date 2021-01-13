import React, {useState} from 'react';
import Board from '../Board/Board';
import Status from '../Status/Status';
import History from '../History/History';
import classNames from 'classnames';
import style from './Game.scss';
import {calculateWinner} from "../../functions/calculateWinner";

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const winner = calculateWinner(squares);
    
    const selectSquare = () => null
    const statusGame = (winner) => {return ""}
    const goToStep = () => null
    const historyLength = 0;
    
    return (
        <div className={classNames(style.flex)}>
            <div>
                <Board tabSquares={squares} selectSquare={selectSquare} />
            </div>
            <div>
                <Status status={statusGame(winner)} />
                <History historyLength={historyLength} goToStep={goToStep} />
            </div>
        </div>
    )
};

export default Game;