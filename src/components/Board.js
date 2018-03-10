import React, { Component } from 'react';
import '../components/Board.css';

class Board extends React.Component{
  render() {
    return (
      <table className="board">
           <tbody>
          <tr>
              <td></td>
              <td ></td>
              <td></td>
          </tr>
          <tr>
              <td></td>
              <td ></td>
              <td ></td>
          </tr>
          <tr>
              <td></td>
              <td></td>
              <td></td>
          </tr>

      </tbody>
      </table>
    );
  }


};
export default Board;