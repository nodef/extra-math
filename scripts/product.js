/**
 * Gives product of numbers (∏).
 * @param {...number} n a list of numbers
 */
function product(...n) {
  var a = 1;
  for(var i=0, I=n.length; i<I; i++)
    a *= n[i];
  return a;
}
module.exports = product;
