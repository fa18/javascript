module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
      browser: true,
      node: true
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
      'html'
    ],
    // add your custom rules here
    rules: {
      // allow paren-less arrow functions
      'arrow-parens': 0,
      'no-unreachable': 1,
      'no-unused-vars': 1,
      'no-multiple-empty-lines': 1,
      // allow async-await
      'generator-star-spacing': 0,
      'space-before-function-paren': 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'no-console': process.env.NODE_ENV === 'production' ? 1 : 0
    },
    globals: {}
  }