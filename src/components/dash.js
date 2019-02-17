import React, {Component} from 'react';
import {dashMessage} from '../services/dashMessage';



export class Dash extends React.Component {
     render() {  
        let message = dashMessage(this.props.turnCounter, this.props.grid.squares, this.props.turn);  

      return (
        <div className="dash section">
        
            <h2> 
            {message}
            </h2>
            <button id="refresh" onClick={this.props.newGame}>
               <img src="https://flaticons.net/gd/makefg.php?i=icons/Application/Command-Reset.png&amp;r=255&amp;g=255&amp;b=255" />
            </button>
         
        </div>
      );
    }
  }
  