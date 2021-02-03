/**
 * Finds product of numbers (∏).
 * @param n a list of numbers
 */
function product(...n: number[]): number {
  var a = 1;
  for(var i=0, I=n.length; i<I; i++)
    a *= n[i];
  return a;
}
export default product;
