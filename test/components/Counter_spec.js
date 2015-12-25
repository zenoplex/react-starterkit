import React from 'react';
import Counter from '../../src/components/Counter';
import assert from 'power-assert';
import { shallow, mount } from 'enzyme';

describe('Counter', () => {
  it('should render h1', () => {
    const wrapper = shallow(<Counter/>);
    assert(wrapper.find('h1').length);
  });

  it('should render specified `increment`', () => {
    const wrapper = shallow(<Counter increment="666"/>);
    assert(/666/.test(wrapper.find('h1').text()));
  });

  it('should render count over time', done => {
    const wrapper = mount(<Counter increment={500}/>);

    setTimeout(() => {
      console.log(wrapper.find('h1').find('span').text() === 1000);
      done();
    }, 1000);
  });
});
