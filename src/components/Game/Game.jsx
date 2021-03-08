import React from 'react';
import classNames from 'classnames';
import Board from '../Board/Board';
import Status from '../Status/Status';
import History from '../History/History';
import style from './Game.scss';

const Game = () => (
  <div className={classNames(style.game)}>
    <div>
      <Board />
    </div>
    <div>
      <Status />
      <History />
    </div>
  </div>
);

export default Game;
