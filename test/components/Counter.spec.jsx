// @flow
import React from 'react';
import assert from 'power-assert';
import { mount } from 'enzyme';
import Counter from '../../src/components/Counter';

describe('Counter', () => {
  it('should render h1', () => {
    const wrapper = mount(<Counter />);
    assert(wrapper.find('h1').length);
  });

  it('should render specified `increment`', () => {
    const wrapper = mount(<Counter increment={666} />);
    assert(/666/.test(wrapper.find('h1').text()));
  });

  it('should render count over time', (done) => {
    const wrapper = mount(<Counter increment={500} />);

    setTimeout(() => {
      assert(Number(wrapper.find('h1').find('span').text()) === 1000);
      done();
    }, 1000);
  });
});
