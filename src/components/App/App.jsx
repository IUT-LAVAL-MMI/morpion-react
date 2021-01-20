import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';

import GameContainer from '../Game/GameContainer';

import store from '../../model/store';

const App = () => (
  <Provider store={store}>
    <GameContainer />
  </Provider>
);

export default hot(App);
