function gcdPair(x, y) {
  while(y!==0) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

/**
 * Gives greatest common divisor of numbers.
 * @param  {...number} x a list of numbers
 */
function gcd(...x) {
  var a = x[0]||1;
  for(var i=1, I=x.length; i<I; i++)
    a = gcdPair(a, x[i]);
  return a;
}
exports.gcd = gcd;
