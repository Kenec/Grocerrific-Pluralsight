/* global expect */
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import GroceryListItem from '../../../components/grocery/GroceryListItem';

describe('<GroceryListItem />', () => {

  const removeGrocery = sinon.spy();
  const buyOrDropGrocery = sinon.spy();
  const grocery = { id: 1, name: 'Apple', bought: false };
  const index = 0;

  const props = {
    index,
    grocery,
    removeGrocery,
    buyOrDropGrocery,
  }

  const wrapper = mount(<GroceryListItem {...props}/>);
  it('should render the App contents', () => {
    expect(wrapper.find('tr').at(0).length).toEqual(1);
    expect(wrapper.find('th').at(0).text()).toEqual("1");
    expect(wrapper.find('td').at(0).text()).toEqual('Apple');
    expect(wrapper.find('button').length).toEqual(2);
  });

  it('should buy or drop grocery when Buy button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(buyOrDropGrocery.calledOnce).toEqual(true);
  });

  it('should handle remove grocery when the remove button is clickec', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(removeGrocery.calledOnce).toEqual(true);
  });
});