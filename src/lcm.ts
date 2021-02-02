import gcd from "./gcd";
import product from "./product";

/**
 * Get least common multiple of numbers.
 * @param n a list of numbers
 */
function lcm(...n: number[]): number {
  return product(...n)/gcd(...n);
}
export default lcm;
