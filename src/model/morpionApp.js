import { combineReducers } from 'redux';
import gameReducer from './reducers/gameReducer';

const morpionApp = combineReducers({
  game: gameReducer,
});

export default morpionApp;
