import React, { Component } from 'react';
import {Square} from './square';

export class Grid extends React.Component {

  renderSquare(i) {  
    return <Square status={this.props.grid.squares[i]} onClick={() => this.props.onSquareClick(i)} />;
  }


  render() {
  
    return (
    
         <div className="grid section">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
     
    );
  }
}
  