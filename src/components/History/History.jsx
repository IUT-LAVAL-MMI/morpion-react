import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import Step from '../Step/Step';
import style from './History.scss';
import rootStore from '../../model/store';

const History = observer(() => {
  const { game } = useContext(rootStore);
  const tab = Array(game.historyLength).fill(null)
    .map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={index}>
        <Step
          goToStep={(stepIdx) => game.changeStep(stepIdx)}
          stepNumber={index}
        />
      </li>
    ));
  return (
    <ul className={style.history}>
      {tab}
    </ul>
  );
});

export default History;
