// @flow
import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Test from './components/Test';
import Counters from './components/Counters';

const routes = (
  <Route component={App}>
    <Route path="/test" component={Test} />
    <Route path="/" component={Counters} />
  </Route>
);

export default routes;
