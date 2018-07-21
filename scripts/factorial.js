function factorial(x) {
  if(x<0) return NaN;
  for(var z=1; x>0; x--)
    z *= x;
  return z;
};
module.exports = factorial;
// https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/factorial.ts
