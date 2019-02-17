import React from 'react';
import {dashMessage} from './dashMessage';


describe('dashMessage', () => {
 
    
  it('It should return start message', () => {  
    const turn = 'X';
    const turnCounter = 0;
    const grid = {
        squares: Array(9).fill(null)
      };
    const message = dashMessage(turnCounter, grid, turn)
    expect(message).toBe("First move goes to X!");
  });

  it('It should return turn 2 of Game message', () => {  
    const turn = 'O';
    const turnCounter = 1;
    const grid = {
        squares: Array(9).fill(null)
      };
    const message = dashMessage(turnCounter, grid, turn)
    expect(message).toBe("It's turn 2 and O is up.");
  });

  it('It should return an in game turn 8 message', () => {  
    const turn = 'O';
    const turnCounter = 7;
    const grid = {
        squares: Array(9).fill(null)
      };
    const message = dashMessage(turnCounter, grid, turn)
    expect(message).toBe("It's turn 8 and O is up.");
  });

  it('It should return a Cats Game end message', () => {  
    const turn = 'X';
    const turnCounter = 9;
    const grid = {
        squares: ['X', 'O', 'X', 
                  'O', 'X', 'O', 
                  'O', 'X', 'O']
      };
    const message = dashMessage(turnCounter, grid.squares, turn)
    expect(message).toBe("Cat's game.");    
  });

  it('It should return turn 6 win message', () => {  
    const turn = 'O';
    const turnCounter = 5;
    const grid = {
        squares: ['X', 'X', 'X',
                  'O', 'O', null, 
                  null,  null,  null]
      };
    const message = dashMessage(turnCounter, grid.squares, turn)
    expect(message).toBe('We have a winner, congrats X!');    
  });

  





 
});