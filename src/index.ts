// METHODS
// =======

// ROUND
// -----

export {floor} from "extra-number";
export {ceil}  from "extra-number";
export {round} from "extra-number";




// ROUNDED DIVISION
// ----------------

export {floorDiv} from "extra-number";
export {ceilDiv}  from "extra-number";
export {roundDiv} from "extra-number";




// MODULO
// ------

export {rem}  from "extra-number";
export {mod}  from "extra-number";
export {modp} from "extra-number";




// RANGE CONTROL
// -------------

export {constrain} from "extra-number";
export {normalize} from "extra-number";
export {remap}     from "extra-number";
export {lerp}      from "extra-number";
export {constrain as clamp} from "extra-number";
export {normalize as norm}  from "extra-number";
export {remap as map}       from "extra-number";




// ARITHMETIC
// ----------

export {isPow}   from "extra-number";
export {prevPow} from "extra-number";
export {nextPow} from "extra-number";
export {root}    from "extra-number";
export {log}     from "extra-number";




// DIVISORS
// --------

export {properDivisors} from "extra-number";
export {aliquotSum}     from "extra-number";
export {isPrime}        from "extra-number";
export {gcd}            from "extra-number";
export {lcm}            from "extra-number";
export {gcd as hcf}     from "extra-number";




// ARRANGEMENTS
// ------------

export {factorial}   from "extra-number";
export {binomial}    from "extra-number";
export {multinomial} from "extra-number";




// GEOMETRY
// --------

export {degrees} from "extra-number";
export {radians} from "extra-number";


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




// STATISTICS
// ----------

export {sum}      from "extra-number";
export {product}  from "extra-number";
export {median}   from "extra-number";
export {modes}    from "extra-number";
export {range}    from "extra-number";
export {variance} from "extra-number";




// MEAN (STATISTICS)
// -----------------

export {arithmeticMean} from "extra-number";
export {geometricMean}  from "extra-number";
export {harmonicMean}   from "extra-number";
export {quadriaticMean} from "extra-number";
export {cubicMean}      from "extra-number";
