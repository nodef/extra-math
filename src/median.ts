/**
 * Get the value separating the higher and lower halves of numbers.
 * @param n a list of numbers
 */
function median(...n: number[]): number {
  if(n.length===0) return 0;
  n.sort((a, b) => a-b);
  var i = n.length>>1;
  if((n.length & 1)===1) return n[i];
  return (n[i-1]+n[i])/2;
}
export default median;
