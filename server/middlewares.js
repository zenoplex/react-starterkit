// @flow
import express from 'express';
import compression from 'compression';
import webpackHotMiddleware from 'webpack-hot-middleware';
import type { $Application } from 'express';

export const listen
: (port: number) => (app: $Application) => *
= port => app => app.listen(port, (error) => {
  if (!error) console.log(`server started at //localhost:${port}`);
});

export const staticRoute
: (path: string) => (app: $Application) => $Application
= path => app => app.use(express.static(path));

export const gzip
: (app: $Application) => $Application
= app => app.use(compression());

export const browserHistory
: (app: $Application) => $Application
// $FlowFixMe
= app => app.get('*', (req, res, next) => {
  const request = req;
  request.url = '/'; // eslint-disable-line immutable/no-mutation
  next();
});

export const webpackDev
: (middleware: any) => (app: $Application) => $Application
= middleware => app => app.use(middleware);

export const webpackHot
: (compiler: any) => (app: $Application) => $Application
= compiler => app => app.use(webpackHotMiddleware(compiler));
