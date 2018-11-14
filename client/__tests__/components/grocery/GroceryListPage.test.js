/* global expect */
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import GroceryListPage from '../../../components/grocery/GroceryListPage';

describe('<GroceryListPage />', () => {

  const removeGrocery = sinon.spy();
  const buyOrDropGrocery = sinon.spy();
  const groceries = [ 
    { id: 1, name: 'Apple', bought: false }, 
    { id: 2, name: 'Pear', bought: false } 
  ]

  const props = {
    groceries,
    removeGrocery,
    buyOrDropGrocery
  }

  const wrapper = mount(<GroceryListPage {...props}/>);
  it('should render the App contents', () => {
    expect(wrapper.find('table').at(0).length).toEqual(1);
    expect(wrapper.find('th').at(1).text()).toEqual('Groceries');
    expect(wrapper.find('tbody').at(0).length).toEqual(1);
    expect(wrapper.find('GroceryListItem').length).toEqual(2);
  });
});