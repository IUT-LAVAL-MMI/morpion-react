import React from 'react';
import style from './Square.scss';
import classNames from 'classnames';

const Square = () => {
    return (
        <button className={classNames(style.case)} type="button">X</button>
    )
}

export default Square;
