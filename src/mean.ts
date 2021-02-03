import sum from "./sum";

/**
 * Finds average of numbers.
 * @param n a list of numbers
 */
function mean(...n: number[]): number {
  if(n.length===0) return 0;
  return sum(...n)/n.length;
}
export default mean;
