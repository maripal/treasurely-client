import React from 'react';
import { shallow } from 'enzyme';
import { AddItemContainer } from './AddItemContainer'; 


describe('<AddItemContainer />', () => {
  it('renders without crashing', () => {
    shallow(<AddItemContainer />);
  });
});
