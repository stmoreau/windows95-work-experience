import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import store from './store';
import App from './components/app';
import './styles/utilities/reset.css';
import './styles/base/main.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

ReactGA.initialize('UA-130666933-01');
ReactGA.pageview(window.location.pathname + window.location.search);