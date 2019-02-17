import React from 'react';
import { shallow } from 'enzyme';
import {Square} from './square';

describe('Square', () => {
     
    const grid = {
        squares: Array(9).fill(null)
      };
      const squareClick = jest.fn();  

  it('It should render correctly in "debug" mode', () => {  

    const component = shallow(<Square 
        debug grid={grid}
         />);  
    expect(component).toMatchSnapshot();
  });

  it('Squares should fire a function on click', () => {
    const component = shallow(<Square debug grid={grid.squares} onClick={squareClick}
       />);  
       component
       .find('.square')
       .simulate('click');
       expect(squareClick).toHaveBeenCalled();
  });
});






