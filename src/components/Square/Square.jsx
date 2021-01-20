import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Square.scss';

const Square = ({ selectSquare, value }) => (
  <button className={classNames(style.case)} onClick={() => selectSquare()} type="button">{value}</button>
);

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  selectSquare: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Square;
