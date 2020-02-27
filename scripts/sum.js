/**
 * Gives sum of numbers (Σ).
 * @param {...number} n a list of numbers
 */
function sum(...n) {
  var a = 0;
  for(var i=0, I=n.length; i<I; i++)
    a += n[i];
  return a;
}
module.exports = sum;
