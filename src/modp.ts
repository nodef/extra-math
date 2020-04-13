/**
 * Gets remainder of x/y with +ve sign (euclidean division).
 * @param x dividend
 * @param y divisor
 */
function modp(x: number, y: number): number {
  return x - Math.abs(y)*Math.floor(x/Math.abs(y));
}
export default modp;
