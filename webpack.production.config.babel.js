import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry:   [
    './src/index',
  ],
  output:  {
    path:     path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      mobile:   true,
      template: 'template.html',
      minify: {
        collapseWhitespace: true,
      },
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
