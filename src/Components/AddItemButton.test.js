import React from 'react';
import { shallow } from 'enzyme';
import { AddItemButton } from './AddItemButton';


describe('<AddItemButton />', () => {
  it('renders without crashing', () => {
    shallow(<AddItemButton />);
  });
});
