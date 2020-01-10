import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import Header from './components/Header';
import './config/ReactotronConfig';

import history from './services/history';
import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
