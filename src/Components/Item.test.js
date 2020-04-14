import React from 'react';
import { shallow } from 'enzyme';
import { Item } from './Item';


describe('<Item />', () => {
  const item = {id: 1, name: 'book', price: 20};
  const { id, name, price } = item;
  it('renders without crashing', () => {
    shallow(<Item id={id} name={name} price={price} />);
  });

  it('calls buyClick when buy button is clicked', () => {
    const buyClick = jest.fn();
    const wrapper = shallow(<Item id={id} name={name} price={price} buyClick={buyClick} />);
    const button = wrapper.find('.buy-button');
    button.simulate('click');
    expect(buyClick).toBeCalledWith(20, 1)
  });

  it('calls editClick when edit button is clicked', () => {
    const editClick = jest.fn();
    const wrapper = shallow(<Item id={id} name={name} price={price} editClick={editClick} />);
    const button = wrapper.find('.edit-button');
    button.simulate('click');
    expect(editClick).toBeCalledWith(1)
  })

  it('calls deleteClick when delete button is clicked', () => {
    const clickDelete = jest.fn();
    const wrapper = shallow(<Item id={id} name={name} price={price} clickDelete={clickDelete} />);
    const button = wrapper.find('.delete-button');
    button.simulate('click');
    expect(clickDelete).toBeCalledWith(1)
  })
});