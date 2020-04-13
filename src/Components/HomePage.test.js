import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';


describe('<HomePage />', () => {
  it('renders without crashing', () => {
    const getTotal = jest.fn();
    const total = 100;
    const getItems = jest.fn(); 

    shallow(<HomePage getTotal={getTotal} total={total} getItems={getItems} />);
  });
})

