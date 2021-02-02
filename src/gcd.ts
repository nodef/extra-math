function gcdPair(x: number, y: number): number {
  while(y!==0) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

/**
 * Get greatest common divisor of numbers.
 * @param n a list of numbers
 */
function gcd(...n: number[]): number {
  var a = n[0]||1;
  for(var i=1, I=n.length; i<I; i++)
    a = gcdPair(a, n[i]);
  return a;
}
export default gcd;
