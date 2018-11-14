/* global expect */
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import GroceryAddPage from '../../../components/grocery/GroceryAddPage';

describe('<GroceryAddPage />', () => {

  const handleSubmit = sinon.spy();
  const addGrocery = sinon.spy();

  const props = {
    addGrocery
  }

  const wrapper = mount(<GroceryAddPage {...props}/>);
  it('should render the App contents', () => {
    expect(wrapper.find('form').at(0).length).toEqual(1);
    expect(wrapper.find('input').at(0).length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should handle add grocery when Add Grodcery button is clicked', () => {
    wrapper.find('form').simulate('submit');
    expect(addGrocery.calledOnce).toEqual(true);
  });
});