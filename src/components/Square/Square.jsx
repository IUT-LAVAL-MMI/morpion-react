import React from 'react';
import classNames from 'classnames';

import style from './Square.scss';

const Square = ({ selectSquare, value }) => (
  <button className={classNames(style.case)} onClick={() => selectSquare()} type="button">{value}</button>
);

export default Square;
