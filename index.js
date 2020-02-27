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
/**
 * Gives mean of numbers (average).
 * @param {...number} n a list of numbers
 */
function mean(...n) {
  if(n.length===0) return 0;
  return sum(...n)/n.length;
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
 * Gives ways to choose k elements from a set of n elements.
 * @param {number} n elements in source set
 * @param {number} k elements in choose set
 */
function binomial(n, k) {
  // generalization to negative integers
  if(k<0 || k>Math.abs(n)) return 0;
  if(n<0) return Math.pow(-1, k)*binomial(-n, k);
  // take advantage of symmetry
  k = k>n-k? n-k:k;
  for(var a=1, i=1; i<=k; i++, n--)
    a *= n/i;
  return a;
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
const A1 =  0.254829592;
const A2 = -0.284496736;
const A3 =  1.421413741;
const A4 = -1.453152027;
const A5 =  1.061405429;
const P  =  0.3275911;

/**
 * Gives error function value of number (approximation).
 * @param {number} n a number
 */
function erf(n) {
  var sgn = n<0? -1:1;
  var n = Math.abs(n);
  var t = 1/(1+ P*n);
  var y = 1-(((((A5*t+A4)*t)+A3)*t+A2)*t+A1)*t*Math.exp(-n*n);
  return sgn*y;
}
const A = [
  -2.8e-17, 1.21e-16, -9.4e-17, -1.523e-15, 7.106e-15,
   3.81e-16, -1.12708e-13, 3.13092e-13, 8.94487e-13,
  -6.886027e-12, 2.394038e-12, 9.6467911e-11,
  -2.27365122e-10, -9.91364156e-10, 5.059343495e-9,
   6.529054439e-9, -8.5238095915e-8, 1.5626441722e-8,
   1.303655835580e-6, -1.624290004647e-6,
  -2.0278578112534e-5, 4.2523324806907e-5,
   3.66839497852761e-4, -9.46595344482036e-4,
  -9.561514786808631e-3, 1.9476473204185836e-2,
   6.4196979235649026e-1, -1.3026537197817094
];

/**
 * Gives complementary error function value of number (approximation).
 * @param {number} n a number
 */
function erfc(n) {
  if(n<0) return 2-erfc(-n);
  var c = 0, d = 0, y = 2/(2+n), z = 4*y-2;
  for(var i=0, I=A.length-1; i<I; i++) {
    var t = d;
    d = z*d-c+A[i];
    c = t;
  }
  return y*Math.exp(-n*n+0.5*(A[I]+z*d)-c);
}
exports.sum = sum;
exports.product = product;
exports.mean = mean;
exports.gcd = gcd;
exports.lcm = lcm;
exports.binomial = binomial;
exports.multinomial = multinomial;
exports.erf = erf;
exports.erfc = erfc;
