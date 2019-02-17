import React from 'react';
import { shallow } from 'enzyme';
import {Dash} from './dash';

describe('Dash', () => {    

    const newGame = jest.fn();  
    const grid = {
        squares: Array(9).fill(null)
      };

  it('It should render correctly in "debug" mode', () => {  

    const component = shallow(<Dash 
        debug grid={grid}
         />);  
    expect(component).toMatchSnapshot();
  });

  it('refresh button click should fire passed function', () => {
    const component = shallow(<Dash grid={grid} newGame ={newGame} />);
    component
      .find('button#refresh')
      .simulate('click');
    expect(newGame).toHaveBeenCalled();
  });



 
});


