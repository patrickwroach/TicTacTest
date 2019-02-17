import React, { Component } from 'react';
import {Grid} from './components/grid';
import {Dash} from './components/dash';
import {findWinner} from './services/game-engine';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movesList: [{
        squares: Array(9).fill(null),
      }],
      turn: 'X',
      turnCounter:0,
    };
    this.newGame = this.newGame.bind(this);
  }  

  handleClick(i) {
    const movesList = this.state.movesList.slice(0, this.state.turnCounter + 1);
    const currentGrid = movesList[movesList.length - 1];
    const newSquares =  currentGrid.squares.slice();
    if (findWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = this.state.turn === 'X' ? 'X' : 'O';

    this.setState({
      movesList: movesList.concat([{
      squares: newSquares,
      }]),
      turn: this.state.turn === 'X' ? 'O' : 'X',
      turnCounter: movesList.length
    });
  }


  changeTurn(target) {
    this.setState({
      turnCounter: target,
      turn: target%2 == 0 ? 'X' : 'O',
    });
  }

  newGame(){
    this.setState({
      movesList: [{
        squares: Array(9).fill(null),
      }],
      turn: 'X',
      turnCounter:0,
        })      
  }

  render() {
    const movesList = this.state.movesList;
    const currentGrid = movesList[this.state.turnCounter]; 
    const moves = movesList.map((step, target) => {
      return (       
          <button key={target} onClick={() => this.changeTurn(target)}>
           <p>{target+1}</p>
          </button>    
      );
    });
    
    return (
      <div className="content-container">
        <div className="content">
          <Dash 
            grid = {currentGrid} 
            turn= {this.state.turn} 
            turnPager = {this.turnPager} 
            turnCounter={this.state.turnCounter}
            newGame = {this.newGame}
            />    
         <Grid 
            grid = {currentGrid}  
            onSquareClick={(i) => this.handleClick(i)} />
         
          <div class="pagination section">
            {moves}       
          </div>
        </div>        
      </div>
    );
  }
}
export default App;
