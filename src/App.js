import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { Container } from './components/Container';
import { Header } from './components/Header';
import './config/ReactotronConfig';

import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
