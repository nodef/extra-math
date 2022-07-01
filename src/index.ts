// NATURAL NUMBERS
// ===============

/**
 * Find the remainder of x/y with sign of x (truncated division).
 * @param x dividend
 * @param y divisor
 */
export function rem(x: number, y: number): number {
  return x % y;
}


/**
 * Find the remainder of x/y with sign of y (floored division).
 * @param x dividend
 * @param y divisor
 */
export function mod(x: number, y: number): number {
  return x - y*Math.floor(x/y);
}


/**
 * Find the remainder of x/y with +ve sign (euclidean division).
 * @param x dividend
 * @param y divisor
 */
export function modp(x: number, y: number): number {
  return x - Math.abs(y)*Math.floor(x/Math.abs(y));
}


// Find the greatest common divisor of a pair of numbers.
function gcdPair(x: number, y: number): number {
  while (y!==0) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

/**
 * Find the greatest common divisor of numbers.
 * @param xs a list of numbers
 */
export function gcd(...xs: number[]): number {
  var a = xs[0] || 1;
  for(var i=1, I=xs.length; i<I; i++)
    a = gcdPair(a, xs[i]);
  return a;
}


/**
 * Find the least common multiple of numbers.
 * @param xs a list of numbers
 */
export function lcm(...xs: number[]): number {
  return product(...xs)/gcd(...xs);
}


/**
 * Find the factorial of a number.
 * @param x a number
 * @param k denominator factorial [0]
 * @returns k=0: x!, x!/k!
 */
export function factorial(x: number, k: number=0): number {
  if (x<0) return 0;
  for (var i=k+1, a=1; i<=x; i++)
    a *= x;
  return a;
}
// https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/factorial.ts
// https://en.wikipedia.org/wiki/Permutation


/**
 * Find the number of ways to choose k elements from a set of n elements.
 * @param n elements in source set
 * @param k elements in choose set
 */
export function binomial(n: number, k: number): number {
  // generalization to negative integers
  if (k<0 || k>Math.abs(n)) return 0;
  if (n<0) return Math.pow(-1, k)*binomial(-n, k);
  // take advantage of symmetry
  k = k>n-k? n-k:k;
  for (var a=1, i=1; i<=k; i++, n--)
    a *= n/i;
  return a;
}


/**
 * TODO: Find the number of ways to put n objects in m bins (n=sum(ki)).
 * @param k objects per bin (ki)
 */
export function multinomial(...k: number[]): number {
  var n = sum(...k), a = 1;
  for(var i=0, j=0, I=k.length; i<I;) {
    if(j<=0) j = k[i++];
    else a *= n--/j--;
  }
  return a;
}




// REAL NUMBERS
// ============

/**
 * Constrain a number within a minimum and maximum value.
 * @param x a number
 * @param min minimum value
 * @param max maximum value
 * @returns x<min: min, x>max: max, x
 */
export function constrain(x: number, min: number, max: number): number {
  return Math.min(Math.max(x, min), max);
}
// https://processing.org/reference/constrain_.html


/**
 * Find the nth root of a number (ⁿ√).
 * @param x a number
 * @param n root
 * @returns ⁿ√x
 */
export function root(x: number, n: number): number {
  return Math.pow(x, 1/n);
}
// https://github.com/alawatthe/MathLib/blob/master/src/Functn/functions/root.ts


/**
 * TODO: (log?) Find the logarithm of a number with a given base.
 * @param x a number
 * @param b logarithm base
 * @returns log_b (x)
 */
export function logb(x: number, b: number): number {
  return Math.log(x)/Math.log(b);
}


/**
 * Normalize a number from its current range into a value between 0 and 1.
 * @param x a number
 * @param min lower bound of current range
 * @param max upper bound of current range
 * @returns ∈ [0, 1]
 */
 export function norm(x: number, min: number, max: number): number {
  return (x - min)/(max - min);
}
// https://processing.org/reference/norm_.html


/**
 * Re-map a number from one range to another.
 * @param x a number
 * @param min lower bound of current range
 * @param max upper bound of current range
 * @param amin lower bound of target range
 * @param amax upper bound of target range
 * @returns ∈ [ymin, ymax]
 */
export function map(x: number, min: number, max: number, amin: number, amax: number): number {
  return amin + ((x - min)/(max - min)) * (amax - amin);
}
// https://processing.org/reference/map_.html


/**
 * TODO: (argument order ok?) Calculate a number between two numbers at a specific increment.
 * @param min minimum value
 * @param max maximum value
 * @param x a number between 0 to 1
 * @returns ∈ [min, max]
 */
export function lerp(min: number, max: number, x: number): number {
  return min + x*(max - min);
}
// https://processing.org/reference/lerp_.html




// GEOMETRY
// ========

/**
 * Convert radians to degrees.
 * @param x radians
 */
export function degrees(x: number): number {
  return x*(180/Math.PI);
}
// https://processing.org/reference/degrees_.html


/**
 * Convert degrees to radians.
 * @param x degrees
 */
export function radians(x: number): number {
  return x*(Math.PI/180);
}
// https://processing.org/reference/radians_.html


/**
 * TODO: (use array?) Calculate the magnitude (length) of a vector.
 * @param x length on x-axis
 * @param y length on y-axis
 * @param z length on x-axis
 * @returns √(x² + y² + z²)
 */
 export function mag(x: number, y: number, z: number): number {
  return Math.sqrt(x*x + y*y + z*z);
}
// https://processing.org/reference/mag_.html


/**
 * TODO: (use array?) Calculate the distance between points.
 * @param x1 x-coordinate of first point
 * @param y1 y-coordinate of first point
 * @param z1 z-coordinate of first point
 * @param x2 x-coordinate of second point
 * @param y2 y-coordinate of second point
 * @param z2 z-coordinate of second point
 * @returns √(Δx² + Δy² + Δz²)
 */
export function dist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number {
  return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2);
}
// https://processing.org/reference/dist_.html




// STATISTICS
// ==========

/**
 * Find the sum of numbers (Σ).
 * @param xs a list of numbers
 */
export function sum(...xs: number[]): number {
  var a = 0;
  for (var x of xs)
    a += x;
  return a;
}


/**
 * Find the product of numbers (∏).
 * @param xs a list of numbers
 */
export function product(...xs: number[]): number {
  var a = 1;
  for (var x of xs)
    a *= x;
  return a;
}


/**
 * Find the average of numbers.
 * @param xs a list of numbers
 */
export function mean(...xs: number[]): number {
  if (xs.length===0) return 0;
  return sum(...xs)/xs.length;
}


/**
 * Find the value separating the higher and lower halves of numbers.
 * @param xs a list of numbers
 */
export function median(...xs: number[]): number {
  if (xs.length===0) return 0;
  xs.sort((a, b) => a-b);
  var i = xs.length>>1;
  if ((xs.length & 1)===1) return xs[i];
  return (xs[i-1] + xs[i])/2;
}


// Get the maximum number of times any number has repeated in a sorted array.
function maxRepeat(xs: number[]): number {
  var count = Math.min(xs.length, 1), max = count;
  for (var i=1, I=xs.length; i<I; i++) {
    if (xs[i-1]===xs[i]) count++;
    else { max = Math.max(max, count); count = 1; }
  }
  return Math.max(max, count);
}

// Get the numbers which have been repeated atleast given number of times.
function getRepeats(xs: number[], r: number): number[] {
  var a: number[] = []; r--;
  for (var i=0, I=xs.length-r; i<I; i++)
    if (xs[i]===xs[i+r]) a.push(xs[i+=r]);
  return a;
}

/**
 * Find the values that appear most often.
 * @param xs a list of numbers
 */
export function modes(...xs: number[]): number[] {
  xs.sort((a, b) => a-b);
  var r = maxRepeat(xs);
  return getRepeats(xs, r);
}


/**
 * Find the difference between the largest and smallest values.
 * @param xs a list of numbers
 */
export function range(...xs: number[]): number {
  return Math.max(...xs) - Math.min(...xs);
}


/**
 * Find the mean of squared deviation of numbers from its mean.
 * @param xs a list of numbers
 */
export function variance(...xs: number[]): number {
  if (xs.length===0) return 0;
  var m = mean(...xs), a = 0;
  for (var x of xs)
    a += (x-m)**2;
  return a/xs.length;
}


const ERF_A1 =  0.254829592;
const ERF_A2 = -0.284496736;
const ERF_A3 =  1.421413741;
const ERF_A4 = -1.453152027;
const ERF_A5 =  1.061405429;
const ERF_P  =  0.3275911;

/**
 * TODO: Find error function value of number (approximation).
 * @param x a number
 */
function erf(x: number): number {
  var sgn = x<0? -1:1;
  var x = Math.abs(x);
  var t = 1/(1+ ERF_P*x);
  var y = 1-(((((ERF_A5*t+ERF_A4)*t)+ERF_A3)*t+ERF_A2)*t+ERF_A1)*t*Math.exp(-x*x);
  return sgn*y;
}
export default erf;


const ERFC_TABLE = [
  -2.8e-17, 1.21e-16, -9.4e-17, -1.523e-15, 7.106e-15,
   3.81e-16, -1.12708e-13, 3.13092e-13, 8.94487e-13,
  -6.886027e-12, 2.394038e-12, 9.6467911e-11,
  -2.27365122e-10, -9.91364156e-10, 5.059343495e-9,
   6.529054439e-9, -8.5238095915e-8, 1.5626441722e-8,
   1.303655835580e-6, -1.624290004647e-6,
  -2.0278578112534e-5, 4.2523324806907e-5,
   3.66839497852761e-4, -9.46595344482036e-4,
  -9.561514786808631e-3, 1.9476473204185836e-2,
   6.4196979235649026e-1, -1.3026537197817094
];

/**
 * TODO: Find the complementary error function value of number (approximation).
 * @param x a number
 */
export function erfc(x: number): number {
  if(x<0) return 2-erfc(-x);
  var c = 0, d = 0, y = 2/(2+x), z = 4*y-2;
  for(var i=0, I=ERFC_TABLE.length-1; i<I; i++) {
    var t = d;
    d = z*d-c+ERFC_TABLE[i];
    c = t;
  }
  return y*Math.exp(-x*x+0.5*(ERFC_TABLE[I]+z*d)-c);
}
