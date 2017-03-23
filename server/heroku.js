// @flow
import express from 'express';
import R from 'ramda';
import { gzip, staticRoute, listen, browserHistory } from './middlewares';
import config from '../webpack.config';

const app = express();

R.pipe(
  gzip,
  staticRoute(config.output.path),
  browserHistory,
  staticRoute(config.output.path),
  listen(3000),
)(app);

