const gcd = require('./gcd');
const product = require('./product');

function lcm(n) {
  return product.apply(null, arguments)/gcd.apply(null, arguments);
};
module.exports = lcm;
