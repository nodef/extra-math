const A1 =  0.254829592;
const A2 = -0.284496736;
const A3 =  1.421413741;
const A4 = -1.453152027;
const A5 =  1.061405429;
const P  =  0.3275911;

function erf(x) {
  var sgn = x<0? -1:1;
  var x = Math.abs(x);
  var t = 1/(1+ P*x);
  var y = 1-(((((A5*t+A4)*t)+A3)*t+A2)*t+A1)*t*Math.exp(-x*x);
  return sgn*y;
};
module.exports = erf;
// https://github.com/AndreasMadsen/mathfn/blob/master/functions/erf.js
// http://www.johndcook.com/cpp_erf.html
