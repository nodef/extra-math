const A0 =  76.18009172947146;
const A1 = -86.50532032941677;
const A2 =  24.01409824083091;
const A3 = -1.231739572450155;
const A4 =  0.1208650973866179e-2;
const A5 = -0.5395239384953e-5;
const SER = 1.000000000190015;
const FAC = 2.5066282746310005;

function lgamma(x) {
  var y = x, z = (((((SER+A0/++y)+A1/++y)+A2/++y)+A3/++y)+A4/++y)+A5/++y;
  return Math.log(FAC*z/x)+(x+0.5)*Math.log(x+5.5)-(x+5.5);
};
module.exports = lgamma;
// from: https://github.com/jstat/jstat/blob/master/src/special.js
