import React, { Component } from 'react';
import { connect } from 'react-redux';
import tictac from '../tictac.jpg';
import Game from '../container/Game';
import '../App.css';
import Hello from '../index';




class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tictac} className="App-logo" alt="logo" />
          <Hello name="Tic Tac Toe " />
          <h2>Start {'\u2728'}</h2>
        </header>
      </div>

    );
    <div>
      <Game />
    </div>
  }
}

export default App;
