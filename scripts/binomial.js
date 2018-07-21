function binomial(n, k) {
  // generalization to negative integers
  if(k<0 || k>Math.abs(n)) return 0;
  if(n<0) return Math.pow(-1, k)*binomial(-n, k);
  // take advantage of symmetry
  k = k>n-k? n-k:k;
  for(var c=1, i=1; i<=k; i++, n--)
    c *= n/i;
  return c;
};
module.exports = binomial;
// https://en.wikipedia.org/wiki/Binomial_coefficient
// https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/binomial.ts
