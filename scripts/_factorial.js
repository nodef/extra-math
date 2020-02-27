function factorial(n, k=0) {
  if(n<0) return NaN;
  for(var f=1; n>k; n--)
    f *= n;
  return f;
};
module.exports = factorial;
// https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/factorial.ts
// https://en.wikipedia.org/wiki/Permutation
