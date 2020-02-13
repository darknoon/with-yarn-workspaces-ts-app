// Tell webpack to compile the "foo" and "bar" packages (since they are TS)
// https://www.npmjs.com/package/next-transpile-modules

const withTM = require('next-transpile-modules')(['bar', 'foo'])
module.exports = withTM()
