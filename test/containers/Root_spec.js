import React from 'react';
import Root from '../../src/containers/Root';
import App from '../../src/containers/App';
import assert from 'power-assert';
import { shallow, mount } from 'enzyme';

describe('Root', () => {
  it('should render App', () => {
    const wrapper = shallow(<Root/>);
    assert(wrapper.find(App).length);
  });
});
