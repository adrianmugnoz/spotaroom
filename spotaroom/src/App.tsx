import React from 'react';
import './App.css';
import { Header } from './core/header'
import { Home } from './modules/home'
import { GlobalStyle } from './core/theme/globals'

const App: React.FC = props => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
