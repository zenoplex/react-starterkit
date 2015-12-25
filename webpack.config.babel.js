import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  devtool: 'cheap-module-inline-eval-source-map',
  entry:   [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output:  {
    path:       '/',
    filename:   'bundle.js',
    publicPath: '',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      mobile:   true,
      template: 'template.html',
    }),
  ],
  module:  {
    loaders: [{
      test:    /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    }],
  },
};
