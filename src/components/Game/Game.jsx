import React, { useState } from 'react';
import classNames from 'classnames';
import Board from '../Board/Board';
import Status from '../Status/Status';
import History from '../History/History';
import style from './Game.scss';
import { MATCHNUL, calculateWinner } from '../../functions/calculateWinner';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentStep, setCurrentStep] = useState(0);

  const currentPlayer = currentStep % 2 === 0 ? 'X' : 'O';
  const winner = calculateWinner(history[currentStep]);
  let status;
  if (winner !== null) {
    if (winner === MATCHNUL) {
      status = 'Match nul !';
    } else {
      status = `${winner} a gagné !`;
    }
  } else {
    status = `C'est à ${currentPlayer} de jouer`;
  }

  const selectSquare = (idxSquare) => {
    const currentSquares = history[currentStep];
    // Précondition : pas déjà de gagnant, et que la case idxSquare ne soit pas déjà remplie
    if (winner !== null || currentSquares[idxSquare] !== null) {
      return;
    }
    // Mise à jour du tableau de squares => une nouvelle dans l'historique
    const squaresCopy = currentSquares.slice();
    squaresCopy[idxSquare] = currentPlayer;
    setHistory([...history.slice(0, currentStep + 1), squaresCopy]);
    // Changement d'étape
    setCurrentStep(currentStep + 1);
  };

  const goToStep = (idxHistory) => {
    setCurrentStep(idxHistory);
  };

  return (
    <div className={classNames(style.game)}>
      <div>
        <Board tabSquares={history[currentStep]} selectSquare={selectSquare} />
      </div>
      <div>
        <Status status={status} />
        <History historyLength={history.length} goToStep={goToStep} />
      </div>
    </div>
  );
};

export default Game;
