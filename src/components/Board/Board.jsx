import React from 'react';
import PropTypes from 'prop-types';
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

Board.propTypes = {
  selectSquare: PropTypes.func.isRequired,
  tabSquares: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Board;
