import React, { useState } from 'react';
import Square from '../Square/Square';
import style from './Board.scss';

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

const Board = ({ tabSquares, selectSquare }) => (
  <div className={style.board}>
    {
      TAB_IDX.map((idx) => (
        <div key={idx} className={style.rowBoard}>
          {
            TAB_IDX.map((idy) => createSquare(idx * 3 + idy, tabSquares, selectSquare))
          }
        </div>
      ))
    }
  </div>
);

export default Board;
