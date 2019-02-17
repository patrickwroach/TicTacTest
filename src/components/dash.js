import React, {Component} from 'react';
import {findWinner} from '../services/game-engine';



export class Dash extends React.Component {
     render() {  
        let message ='';  
        const win = findWinner(this.props.grid.squares);
        const turnNumber = this.props.turnCounter + 1;
        if (this.props.turnCounter===0){
           message = "First move goes to X!" ;    
        } else{
            if (win) {
            message = 'We have a winner, congrats ' + win + '!';
            } else {
                if(this.props.turnCounter<9){
                    message =  "It's turn " +  turnNumber + " and " + this.props.turn + " is up.";
                }else{
                    message="Cat's game."
                }

        }
    }

      return (
        <div className="dash section">
        
            <h2> 
            {message}
            </h2>
            <button onClick={this.props.newGame}>
               <img src="https://flaticons.net/gd/makefg.php?i=icons/Application/Command-Reset.png&amp;r=255&amp;g=255&amp;b=255" />
            </button>
         
        </div>
      );
    }
  }
  