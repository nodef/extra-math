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
 * @param n a number
 */
function erfc(n: number): number {
  if(n<0) return 2-erfc(-n);
  var c = 0, d = 0, y = 2/(2+n), z = 4*y-2;
  for(var i=0, I=A.length-1; i<I; i++) {
    var t = d;
    d = z*d-c+A[i];
    c = t;
  }
  return y*Math.exp(-n*n+0.5*(A[I]+z*d)-c);
}
export default erfc;
