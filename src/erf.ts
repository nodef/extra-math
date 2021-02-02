const A1 =  0.254829592;
const A2 = -0.284496736;
const A3 =  1.421413741;
const A4 = -1.453152027;
const A5 =  1.061405429;
const P  =  0.3275911;

/**
 * Get error function value of number (approximation).
 * @param n a number
 */
function erf(n: number): number {
  var sgn = n<0? -1:1;
  var n = Math.abs(n);
  var t = 1/(1+ P*n);
  var y = 1-(((((A5*t+A4)*t)+A3)*t+A2)*t+A1)*t*Math.exp(-n*n);
  return sgn*y;
}
export default erf;
