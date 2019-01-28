const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

// square the number x after x seconds
module.exports = x => setTimeoutPromise(x * 1000, x)
  .then((x) => `${x} squared = ${x ** 2}`);
