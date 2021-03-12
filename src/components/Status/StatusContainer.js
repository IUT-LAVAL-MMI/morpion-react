import { connect } from 'react-redux';
import Status from './Status';

const mapStateToProps = (state) => ({
  status: state.game.status,
});

const TitleContainer = connect(
  mapStateToProps,
)(Status);

export default TitleContainer;
