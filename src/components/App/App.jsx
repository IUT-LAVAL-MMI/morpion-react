import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';

import Game from '../Game/Game';

import store from '../../model/store';

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

export default hot(App);
