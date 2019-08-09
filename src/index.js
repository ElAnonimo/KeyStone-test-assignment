import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import i18n from './i18n'; // eslint-disable-line no-unused-vars
import App from './components/common/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './assets/styles/index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
