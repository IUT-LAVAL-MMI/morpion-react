import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import style from './Status.scss';
import rootStore from '../../model/store';

const Status = observer(() => {
  const { game } = useContext(rootStore);
  return (
    <label className={classNames(style.statusContainer)}>{game.statusTitle}</label>
  );
});

export default Status;
