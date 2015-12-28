import React, { Component } from 'react';
import Router from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import { routes } from '../routes';

const history = createHashHistory({
  queryKey: false,
});

export default class Root extends Component {
  render() {
    return (
      <Router history={history} routes={routes}/>
    );
  }
}
