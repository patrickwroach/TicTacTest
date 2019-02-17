import React from 'react';
import { shallow } from 'enzyme';
import {Grid} from './grid';

describe('Grid', () => {
     
    const grid = {
        squares: Array(9).fill(null)
      };

  it('It should render correctly in "debug" mode', () => {  

    const component = shallow(<Grid 
        debug grid={grid}
         />);  
    expect(component).toMatchSnapshot();
  });
 
});


