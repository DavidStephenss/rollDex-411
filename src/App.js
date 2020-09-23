import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchRandoms from './components/fetchcomponent';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FetchRandoms/>
    </div>
  );
}

export default App;
