function pair(a, b) {
  while(b!==0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a;
};
function gcd(n) {
  var g = arguments[0]||1;
  for(var i=1, I=arguments.length; i<I; i++)
    g = pair(g, arguments[i]);
  return g;
};
module.exports = gcd;
// https://lemire.me/blog/2013/12/26/fastest-way-to-compute-the-greatest-common-divisor/
