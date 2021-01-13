import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './status.scss'

const Status = ({status}) => (
    <label className={classNames(style.status_container)}>{status}</label>
);

Status.propTypes = {
    text: PropTypes.string.isRequired
}

export default Status