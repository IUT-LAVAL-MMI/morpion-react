import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import Square from '../Square/Square';
import style from './Board.scss';
import rootStore from '../../model/store';

const TAB_IDX = [0, 1, 2];

function createSquare(idSquare, tabSquares, selectSquare) {
  return (
    <Square
      key={idSquare}
      selectSquare={() => selectSquare(idSquare)}
      value={tabSquares[idSquare]}
    />
  );
}

const Board = observer(() => {
  const { game } = useContext(rootStore);
  return (
    <div className={style.board}>
      {
        TAB_IDX.map((idx) => (
          <div key={idx} className={style.rowBoard}>
            {
              TAB_IDX.map((idy) => createSquare(
                idx * 3 + idy,
                game.currentGameGrid.squares,
                (idxSquare) => game.playATurn(idxSquare),
              ))
            }
          </div>
        ))
    }
    </div>
  );
});

export default Board;
