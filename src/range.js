/**
 * Gives the difference between the largest and smallest values.
 * @param {...number} n a list of numbers
 */
function range(...n) {
  return Math.max(...n)-Math.min(...n);
}
module.exports = range;
