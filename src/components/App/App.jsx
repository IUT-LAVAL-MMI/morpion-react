// import { hot } from 'react-hot-loader/root';
import React from 'react';
// import { Provider } from 'react-redux';

import Game from '../Game/Game';
import AsyncDemo from '../AsyncDemo/AsyncDemo';

// import store from '../../model/store';

const App = () => (
  // <Provider store={store} key={Math.random()}>
  <>
    <Game />
    <AsyncDemo />
  </>
  // </Provider>
);

// export default hot(App);
export default App;
