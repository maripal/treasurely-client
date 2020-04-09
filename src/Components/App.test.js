import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { Nav } from './Nav';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});