// @flow
import React from 'react';
import Router from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import routes from '../routes';

const history = createHashHistory({
  queryKey: false,
});

const Root = () =>
  <Router history={history} routes={routes} />;

export default Root;
