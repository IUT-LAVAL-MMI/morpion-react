import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playTurn } from '../../model/features/game/gameSlice';
import Square from '../Square/Square';
import style from './Board.scss';

function createSquare(idSquare, tabSquares, selectSquare) {
  return (
    <Square
      key={idSquare}
      selectSquare={() => selectSquare(idSquare)}
      value={tabSquares[idSquare]}
    />
  );
}

const TAB_IDX = [0, 1, 2];

const Board = () => {
  // Selecteur pour récupérer une info particulière du state (ici le tableau courant de carrés)
  const tabSquares = useSelector((state) => state.game.history[state.game.stepNumber].squares);
  // Dispatch pour envoyer une action redux (ici utiliser avec playTurn)
  const dispatch = useDispatch();

  return (
    <div className={style.board}>
      {
        TAB_IDX.map((idx) => (
          <div key={idx} className={style.rowBoard}>
            {
              TAB_IDX.map((idy) => createSquare(idx * 3 + idy, tabSquares,
                (idxSquare) => dispatch(playTurn(idxSquare))))
          }
          </div>
        ))
    }
    </div>
  );
};

export default Board;
