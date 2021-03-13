import { hot } from 'react-hot-loader/root';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';

import './index.scss';

import store from './model/store';

const EntryPointComponent = hot(() => (
  <main>
    <Provider store={store}>
      <App />
    </Provider>
  </main>
));

render(
  <EntryPointComponent />,
  document.getElementById('appMountPoint'),
);

// render(
//   <main>
//     <App />
//   </main>,
//   document.getElementById('appMountPoint'),
// );
