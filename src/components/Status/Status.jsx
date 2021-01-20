import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Status.scss';

const Status = ({ status }) => (
  <label className={classNames(style.statusContainer)}>{status}</label>
);

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;
