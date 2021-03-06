import React from 'react';
import PropTypes from 'prop-types';

import style from './Step.scss';

const Step = ({ stepNumber, goToStep }) => (
  // eslint-disable-next-line react/button-has-type,no-undef
  <button className={style.step} onClick={() => goToStep(stepNumber)}>
    Aller à l&apos;étape
    {stepNumber}
  </button>
);

Step.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  goToStep: PropTypes.func.isRequired,
};

export default Step;
