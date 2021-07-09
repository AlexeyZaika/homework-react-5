import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Header from './layout/Header';
import Routes from './component/Routes';

function App() {
  return (
    <Router>
      <Header>
        <Routes />
      </Header>
    </Router>
  );
}

export default App;
