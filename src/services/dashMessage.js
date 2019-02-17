import {findWinner} from './findWinner';
export function dashMessage(turnCounter, grid, turn){
    let message ='';   
    let win = findWinner(grid); 
 
    if (turnCounter===0){
    message = "First move goes to X!" ;    
    } else{
        if (win) {
            message = 'We have a winner, congrats ' + win + '!';
        } else {
            if(turnCounter<9){
                message =  "It's turn " +  (turnCounter+1) + " and " + turn + " is up.";
            }else{
                message="Cat's game."
            }
    }
    }
    return message;
}