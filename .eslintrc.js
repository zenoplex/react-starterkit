module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    mocha: true,
    node: true,
    es6: true,
  },
  plugins: [
    'import',
    'immutable',
    'flowtype',
  ],
  rules: {
    'no-console': 0,
    'immutable/no-let': 2,
    'immutable/no-this': 2,
    'immutable/no-mutation': 2
  },
};
