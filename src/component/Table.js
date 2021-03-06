import React, {Component} from 'react';
import '../App.css';
import {Square} from './Square';

export default class Table extends Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                handleClick={this.props.handleClick.bind(null, i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="table-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="table-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="table-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
        
            </div>
        );
    }
}
