import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BoardContainer from '../Board/BoardContainer';
import Status from '../Status/Status';
import HistoryContainer from '../History/HistoryContainer';
import style from './Game.scss';
import { MATCHNUL } from '../../functions/calculateWinner';

const Game = ({ currentWinner, currentPlayer }) => {
  let status;
  if (currentWinner !== null) {
    if (currentWinner === MATCHNUL) {
      status = 'Match nul !';
    } else {
      status = `${currentWinner} a gagné !`;
    }
  } else {
    status = `C'est à ${currentPlayer} de jouer`;
  }

  return (
    <div className={classNames(style.game)}>
      <div>
        <BoardContainer />
      </div>
      <div>
        <Status status={status} />
        <HistoryContainer />
      </div>
    </div>
  );
};

Game.defaultProps = {
  currentWinner: null,
};

Game.propTypes = {
  currentWinner: PropTypes.string,
  currentPlayer: PropTypes.string.isRequired,
};

export default Game;
