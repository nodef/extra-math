const gcd = require('./gcd');
const product = require('./product');

/**
 * Gives least common multiple of numbers.
 * @param {...number} n a list of numbers
 */
function lcm(...n) {
  return product(...n)/gcd(...n);
}
module.exports = lcm;
