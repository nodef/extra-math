import mean from "./mean";

/**
 * Gives the mean of squared deviation of numbers from its mean.
 * @param n a list of numbers
 */
function variance(...n: number[]): number {
  var m = mean(...n), a = 0;
  for(var x of n)
    a += (x-m)**2;
  return n.length>0? a/n.length:0;
}
export default variance;
