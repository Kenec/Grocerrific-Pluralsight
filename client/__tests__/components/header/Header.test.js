/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/header/Header';

describe('<Header />', () => {
  const wrapper = shallow(<Header counter={0} />);
  it('should render the Header contents', () => {
    expect(wrapper.find('nav').at(0).length).toEqual(1);
    expect(wrapper.find('a').at(0).text()).toEqual('Grocerrific');
    expect(wrapper.find('ul').at(0).length).toEqual(1);
  });
});