import React from 'react';
import classNames from 'classnames';
import BoardContainer from '../Board/BoardContainer';
import StatusContainer from '../Status/StatusContainer';
import HistoryContainer from '../History/HistoryContainer';
import style from './Game.scss';

const Game = () => (
  <div className={classNames(style.game)}>
    <div>
      <BoardContainer />
    </div>
    <div className={classNames(style.histocol)}>
      <StatusContainer />
      <HistoryContainer />
    </div>
  </div>
);

export default Game;
