import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeStep } from '../../model/features/game/gameSlice';
import Step from '../Step/Step';
import style from './History.scss';

const History = () => {
  // Selecteur pour récupérer une info particulière du state (ici la taille de l'historique)
  const historyLength = useSelector((state) => state.game.history.length);
  // Dispatch pour envoyer une action redux (ici utiliser avec playTurn)
  const dispatch = useDispatch();

  const tab = Array(historyLength).fill(null)
    .map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={index}>
        <Step
          goToStep={(stepIdx) => dispatch(changeStep(stepIdx))}
          stepNumber={index}
        />
      </li>
    ));
  return (
    <ul className={style.history}>
      {tab}
    </ul>
  );
};

export default History;
