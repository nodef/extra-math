/**
 * Get sum of numbers (Σ).
 * @param n a list of numbers
 */
function sum(...n: number[]): number {
  var a = 0;
  for(var i=0, I=n.length; i<I; i++)
    a += n[i];
  return a;
}
export default sum;
