/**
 * Gets remainder of x/y with +ve sign (euclidean division).
 * @param {number} x dividend
 * @param {number} y divisor
 * @returns {number}
 */
function modp(x, y) {
  return x - Math.abs(y)*Math.floor(x/Math.abs(y));
}
module.exports = modp;
