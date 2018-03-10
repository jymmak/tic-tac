import React, { Component } from 'react';
import tictac from './tictac.jpg';
import './App.css';
import Hello from './index';
import Board from './components/Board';
import Result from './components/Result'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tictac} className="App-logo" alt="logo" />
          <Hello name="Tic Tac Toe " />
          <h2>Start {'\u2728'}</h2>
        </header>
       <Board/>
        



      </div>
    );
  }
}

export default App;
