import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import GameInfo from './model/GameInfo';
import rootStore from './model/store';

import './index.scss';

const STORE = {
  game: new GameInfo(),
};

render(
  <main>
    <rootStore.Provider value={STORE}>
      <App />
    </rootStore.Provider>
  </main>,
  document.getElementById('appMountPoint'),
);
