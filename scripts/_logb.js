// number methods
// +mantissa, exponent
// +integer, decimal (modf)
// +numerator, denominator
function logb(x, b) {
  return Math.log(x)/Math.log(b);
};
module.exports = logb;
