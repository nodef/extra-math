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
module.exports = binomial;
