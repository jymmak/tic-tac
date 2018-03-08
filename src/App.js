import React, { Component } from 'react';
import tictac from './tictac.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tictac} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tic-Tac</h1>
        </header>
        <main>
          <table className="board board-js">
            <tbody>
              <tr>
                <td id="m1"></td>
                <td id="m2"></td>
                <td id="m3"></td>
              </tr>
              <tr>
                <td id="m4"></td>
                <td id="m5"></td>
                <td id="m6"></td>
              </tr>
              <tr>
                <td id="m7"></td>
                <td id="m8"></td>
                <td id="m9"></td>
              </tr>

            </tbody>
          </table>
          <p className="result result-js"></p>
          <button type="button" class="btn btn-primary">Reset</button>
        </main>


      </div>
    );
  }
}

export default App;
