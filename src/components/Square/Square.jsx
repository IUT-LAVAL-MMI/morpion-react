import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Square.scss';

const Square = ({ selectSquare, value }) => (
  <button className={classNames(style.case)} onClick={() => selectSquare()} type="button">{value}</button>
);

Square.propTypes = {
  value: PropTypes.string,
  selectSquare: PropTypes.func.isRequired,
};

Square.defaultProps = {
  value: null,
};

export default Square;
