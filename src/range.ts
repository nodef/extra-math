/**
 * Finds the difference between the largest and smallest values.
 * @param n a list of numbers
 */
function range(...n: number[]): number {
  return Math.max(...n)-Math.min(...n);
}
export default range;
