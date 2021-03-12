import { connect } from 'react-redux';
import { playTurn } from '../../model/actions';
import Board from './Board';

const mapStateToProps = (state) => ({
  tabSquares: state.game.history[state.game.stepNumber].squares,
});

const mapDispatchToProps = (dispatch) => ({
  selectSquare: (idxSquare) => dispatch(playTurn(idxSquare)),
});

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);

export default BoardContainer;
