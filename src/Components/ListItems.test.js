import React from 'react';
import { shallow } from 'enzyme';
import { ListItems } from './ListItems';


describe('<ListItems />', () => {
  it('renders without crashing', () => {
    shallow(<ListItems items={[]} />);
  });
});