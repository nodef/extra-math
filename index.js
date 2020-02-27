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
 * @param  {...number} n a list of numbers
 */
function gcd(...n) {
  var a = n[0]||1;
  for(var i=1, I=n.length; i<I; i++)
    a = gcdPair(a, n[i]);
  return a;
}
/**
 * Gives least common multiple of numbers.
 * @param {...number} n a list of numbers
 */
function lcm(...n) {
  return product(...n)/gcd(...n);
}
/**
 * Gives ways to put n objects in m bins (n=sum(ki)).
 * @param {...number} k objects per bin (ki)
 */
function multinomial(...k) {
  var n = sum(...k), a = 1;
  for(var i=0, j=0, I=k.length; i<I;) {
    if(j<=0) j = k[i++];
    else a *= n--/j--;
  }
  return a;
}
exports.sum = sum;
exports.product = product;
exports.gcd = gcd;
exports.lcm = lcm;
exports.multinomial = multinomial;
