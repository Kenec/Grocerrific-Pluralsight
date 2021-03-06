/* global expect */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('should render the App contents', () => {
    expect(wrapper.find('div').at(0).length).toEqual(1);
    expect(wrapper.find('Header').at(0).length).toEqual(1);
    expect(wrapper.find('Header').props().counter).toEqual(0);
  });
});