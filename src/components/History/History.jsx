import React from 'react';
import PropTypes from 'prop-types';
import Step from '../Step/Step';
import style from './History.scss';

const History = ({ historyLength, goToStep }) => {
  const tab = Array(historyLength).fill(null)
    // eslint-disable-next-line react/no-array-index-key
    .map((_, index) => <li key={index}><Step goToStep={goToStep} stepNumber={index} /></li>);
  return (
    <ul className={style.history}>
      {tab}
    </ul>
  );
};

History.propTypes = {
  historyLength: PropTypes.number.isRequired,
  goToStep: PropTypes.func.isRequired,
};

export default History;
