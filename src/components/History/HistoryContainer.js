import { connect } from 'react-redux';
import { changeStep } from '../../model/actions';
import History from './History';

const mapStateToProps = (state) => ({
  historyLength: state.game.history.length,
});

const mapDispatchToProps = (dispatch) => ({
  goToStep: (stepIdx) => dispatch(changeStep(stepIdx)),
});

const HistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(History);

export default HistoryContainer;
