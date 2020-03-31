const sum = require('./sum');

/**
 * Gives average of numbers.
 * @param {...number} n a list of numbers
 */
function mean(...n) {
  if(n.length===0) return 0;
  return sum(...n)/n.length;
}
module.exports = mean;
