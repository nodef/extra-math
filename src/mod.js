/**
 * Gets remainder of x/y with sign of y (floored division).
 * @param {number} x dividend
 * @param {number} y divisor
 * @returns {number}
 */
function mod(x, y) {
  return x - y*Math.floor(x/y);
}
module.exports = mod;
