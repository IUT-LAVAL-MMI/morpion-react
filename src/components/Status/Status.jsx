import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import style from './Status.scss';

const Status = () => {
  // Selecteur pour récupérer une info particulière du state (ici le tableau courant de carrés)
  const status = useSelector((state) => state.game.status);
  return (
    <label className={classNames(style.status)}>{status}</label>
  );
};

export default Status;
