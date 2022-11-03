// METHODS
// =======

// RE-EXPORTS
// ----------

export {
  // Round
  floor,
  ceil,
  round,
  // Rounded division
  floorDiv,
  ceilDiv,
  roundDiv,
  // Modulo
  rem,
  mod,
  modp,
  // Range control
  constrain,
  constrain as clamp,
  normalize,
  normalize as norm,
  lerp,
  remap,
  remap as map,
  // Arithmetic
  isPow,
  prevPow,
  nextPow,
  root,
  log,
  // Divisors
  properDivisors,
  properDivisors as aliquotParts,
  aliquotSum,
  minPrimeFactor,
  minPrimeFactor as leastPrimeFactor,
  maxPrimeFactor,
  maxPrimeFactor as greatestPrimeFactor,
  primeFactors,
  primeExponentials,
  isPrime,
  gcd,
  gcd as hcf,
  lcm,
  // Arrangements
  factorial,
  binomial,
  multinomial,
  // Geometry
  degrees,
  radians,
  // Statistics
  sum,
  product,
  median,
  modes,
  range,
  variance,
  // Mean (statistics)
  arithmeticMean,
  arithmeticMean as mean,
  geometricMean,
  harmonicMean,
  quadriaticMean,
  quadriaticMean as rootMeanSquare,
  cubicMean,
} from "extra-number";




// GEOMETRY
// --------

/**
 * Calculate the magnitude (length) of a vector.
 * @param xs vector ([x, y, z, ...])
 * @returns √(x² + y² + z²)
 */
export function magnitude(xs: number[]): number {
  var a = 0;
  for (var i=0, I=xs.length; i<I; i++)
    a += xs[i]**2;
  return Math.sqrt(a);
}
// https://processing.org/reference/mag_.html


/**
 * Calculate the distance between two points.
 * @param xs first point ([x, y, z, ...])
 * @param ys second point ([x, y, z, ...])
 * @returns √(Δx² + Δy² + Δz²)
 */
export function distance(xs: number[], ys: number[]): number {
  var a = 0;
  for (var i=0, I=xs.length; i<I; i++)
    a += (xs[i] - ys[i])**2;
  return Math.sqrt(a);
}
// https://processing.org/reference/dist_.html
