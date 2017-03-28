// @flow
import express from 'express';
import webpack from 'webpack';
import R from 'ramda';
import webpackDevMiddleware from 'webpack-dev-middleware';
import { listen, browserHistory, webpackDev, webpackHot } from './middlewares';
import config from '../webpack.config';

const app = express();
const port = Number(process.env.PORT) || 3000;
const compiler = webpack(config);
const devMiddleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: { colors: true },
});

R.pipe(
  webpackDev(devMiddleware),
  webpackHot(compiler),
  browserHistory,
  webpackDev(devMiddleware),
  listen(port),
)(app);
