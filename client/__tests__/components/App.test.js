/* global expect */
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { App } from '../../components/App';

describe('<App />', () => {

  const addGrocery = sinon.spy();
  const buyOrDropGrocery = sinon.spy();
  const removeGrocery = sinon.spy();

  const props = {
    groceryActions: { addGrocery, buyOrDropGrocery, removeGrocery },
    groceries: [{ id: 1, name: 'Apple', bought: false }],
    bought: []
  }

  const wrapper = mount(<App {...props}/>);
  it('should render the App contents', () => {
    expect(wrapper.find('div').at(0).length).toEqual(1);
    expect(wrapper.find('Header').at(0).length).toEqual(1);
    expect(wrapper.find('Header').props().counter).toEqual(0);
    expect(wrapper.find('GroceryAddPage').length).toEqual(1);
    expect(wrapper.find('GroceryListPage').length).toEqual(1);
  });

  it('should contain Child Components with Props', () => {
    expect(wrapper.find('GroceryAddPage').props().addGrocery.length).toEqual(1);
    expect(wrapper.find('GroceryListPage').props().removeGrocery.length).toEqual(1);
    expect(wrapper.find('GroceryListPage').props().buyOrDropGrocery.length).toEqual(1);
  });

  it('should handle adding grocery function', () => {
    wrapper.find('form').simulate('submit');
    expect(addGrocery.calledOnce).toEqual(true);
  });

  it('should handle buy or drop grocery function', () => {
    wrapper.find('GroceryListItem').find('button').at(0).simulate('click');
    expect(buyOrDropGrocery.calledOnce).toEqual(true);
  });

  it('should handle remove grocery grocery function', () => {
    wrapper.find('GroceryListItem').find('button').at(1).simulate('click');
    expect(removeGrocery.calledOnce).toEqual(true);
  });
});