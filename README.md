A collection of common mathematical functions.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-math),
🌐 [Web](https://www.npmjs.com/package/extra-math.web),
📜 [Files](https://unpkg.com/extra-math/),
📰 [JSDoc](https://nodef.github.io/extra-math/),
📘 [Wiki](https://github.com/nodef/extra-math/wiki/).

Mathematics is the classification and study of all possible patterns [(1)]. This
package includes common number functions related to querying *about* numbers,
*comparing* numbers, *rounding* numbers, performing *rounded division*,
performing *modulo* operations, *controlling range* of numbers, performing
*arithmetic* operations, obtaining *divisors* of a number (and related
operations), getting the number of possible *arrangements* of a set of objects,
performing *geometry*-related calculations, performing basic *statistical*
analysis, and finding various *statistical means*.

**Natural numbers**: There are 3 different ways of performing the *modulo*
operation: [rem], [mod], and [modp]. [gcd]/`HCF` and [lcm] of a list of numbers
can be obtained. To calculate the number of ways of *ordering items*, use
[factorial]/`P(n, k)`, [binomial]/`C(n, k)`, or [multinomial]/`n!/k₁!k₂!...`.

**Real numbers**: *Range* of a number can be controlled with [constrain],
[normalize], or [remap]. Use [lerp] for *linear interpolation* (or extrapolation);
[root] for calculating the *n-th root* of a number; and [log] to find the
*logarithm* of a number with a given base.

**Geometry**: Perform conversion from [degrees] to [radians] and vice versa.
Find the [magnitude] of a vector or [distance] between two points.

**Statistics**: For a list of numbers, we can calculate the [sum], [product],
[arithmeticMean]. [median] gives the value lying in the middle when the numbers are
sorted, and [modes] gives the values which are repeated most often. The
difference between the largest and the smallest values is the [range].
[variance] is a measure of variability of numbers.

This package is available in both *Node.js* and *Web* formats. The web format is
exposed as `extra_math` standalone variable and can be loaded from [jsDelivr CDN].

[(1)]: https://en.wikipedia.org/wiki/Walter_Warwick_Sawyer
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-math.web/index.js

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

<br>


```javascript
const math = require('extra-math');
// import * as math from "extra-math";
// import * as math from "https://unpkg.com/extra-math/index.mjs"; (deno)

math.sum(1, 2, 3, 4);
// → 10

math.median(1, 7, 8);
// → 7

math.variance(1, 2, 3, 4);
// → 1.25

math.lcm(2, 3, 4);
// → 12
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [floor] | Round down a number to specific precision. |
| [ceil] | Round up a number to specific precision. |
| [round] | Round a number to specific precision. |
|  |  |
| [floorDiv] | Perform floor-divison of two numbers. |
| [ceilDiv] | Perform ceiling-divison of two numbers. |
| [roundDiv] | Perform rounded-divison of two numbers. |
|  |  |
| [rem] | Find the remainder of x/y with sign of x (truncated division). |
| [mod] | Find the remainder of x/y with sign of y (floored division). |
| [modp] | Find the remainder of x/y with +ve sign (euclidean division). |
|  |  |
| [constrain] | Constrain a number within a minimum and a maximum value. |
| [normalize] | Normalize a number from its current range into a value between 0 and 1. |
| [remap] | Re-map a number from one range to another. |
| [lerp] | Linearly interpolate a number between two numbers. |
|  |  |
| [isPow] | Check if a number is a power-of-n. |
| [prevPow] | Find largest power-of-n less than or equal to given number. |
| [nextPow] | Find smallest power-of-n greater than or equal to given number. |
|  |  |
| [root] | Find the nth root of a number (ⁿ√). |
| [log] | Find the logarithm of a number with a given base. |
|  |  |
| [properDivisors] | List all divisors of a number, except itself. |
| [aliquotSum] | Sum all proper divisors of a number. |
| [minPrimeFactor] | Find the least prime number which divides a number. |
| [maxPrimeFactor] | Find the greatest prime number which divides a number. |
| [primeFactors] | Find the prime factors of a number. |
| [primeExponentials] | Find the prime factors and respective exponents of a number. |
| [isPrime] | Check if number is prime. |
| [gcd] | Find the greatest common divisor of numbers. |
| [lcm] | Find the least common multiple of numbers. |
|  |  |
| [factorial] | Find the factorial of a number. |
| [binomial] | Find the number of ways to choose k elements from a set of n elements. |
| [multinomial] | Find the number of ways to put n objects in m bins (n=sum(kᵢ)). |
|  |  |
| [degrees] | Convert radians to degrees. |
| [radians] | Convert degrees to radians. |
| [magnitude] | Calculate the magnitude (length) of a vector. |
| [distance] | Calculate the distance between two points. |
|  |  |
| [sum] | Find the sum of numbers (Σ). |
| [product] | Find the product of numbers (∏). |
| [median] | Find the value separating the higher and lower halves of numbers. |
| [modes] | Find the values that appear most often. |
| [range] | Find the smallest and largest values. |
| [variance] | Find the mean of squared deviation of numbers from its mean. |
|  |  |
| [arithmeticMean] | Find the average of numbers. |
| [geometricMean] | Find the geometric mean of numbers. |
| [harmonicMean] | Find the harmonic mean of numbers. |
| [quadriaticMean] | Find the quadriatic mean of numbers. |
| [cubicMean] | Find the cubic mean of numbers. |

<br>
<br>


## References

- [Yang, Z. H., & Tian, J. F. (2018). An accurate approximation formula for gamma function. Journal of inequalities and applications, 2018(1), 56.](https://doi.org/10.1186/s13660-018-1646-6)
- [MathLib by @alawatthe](https://github.com/alawatthe/MathLib)
- [Processing Reference](https://processing.org/reference)
- [Common mathematical functions by cppreference](https://en.cppreference.com/w/cpp/numeric/math)
- [Modulo operation](https://en.wikipedia.org/wiki/Modulo_operation)
- [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm)
- [Least common multiple](https://en.wikipedia.org/wiki/Least_common_multiple)
- [Permutation](https://en.wikipedia.org/wiki/Permutation)
- [Binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient)
- [Multinomial distribution](https://en.wikipedia.org/wiki/Multinomial_distribution)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

<br>
<br>


[![](https://img.youtube.com/vi/dW8Cy6WrO94/maxresdefault.jpg)](https://www.youtube.com/watch?v=dW8Cy6WrO94)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![DOI](https://zenodo.org/badge/141781770.svg)](https://zenodo.org/badge/latestdoi/141781770)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-math/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-math?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/13d7102b0273f2a77c66/test_coverage)](https://codeclimate.com/github/nodef/extra-math/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/13d7102b0273f2a77c66/maintainability)](https://codeclimate.com/github/nodef/extra-math/maintainability)


[floor]: https://github.com/nodef/extra-math/wiki/floor
[ceil]: https://github.com/nodef/extra-math/wiki/ceil
[round]: https://github.com/nodef/extra-math/wiki/round
[floorDiv]: https://github.com/nodef/extra-math/wiki/floorDiv
[ceilDiv]: https://github.com/nodef/extra-math/wiki/ceilDiv
[roundDiv]: https://github.com/nodef/extra-math/wiki/roundDiv
[rem]: https://github.com/nodef/extra-math/wiki/rem
[mod]: https://github.com/nodef/extra-math/wiki/mod
[modp]: https://github.com/nodef/extra-math/wiki/modp
[constrain]: https://github.com/nodef/extra-math/wiki/constrain
[normalize]: https://github.com/nodef/extra-math/wiki/normalize
[remap]: https://github.com/nodef/extra-math/wiki/remap
[lerp]: https://github.com/nodef/extra-math/wiki/lerp
[isPow]: https://github.com/nodef/extra-math/wiki/isPow
[prevPow]: https://github.com/nodef/extra-math/wiki/prevPow
[nextPow]: https://github.com/nodef/extra-math/wiki/nextPow
[root]: https://github.com/nodef/extra-math/wiki/root
[log]: https://github.com/nodef/extra-math/wiki/log
[properDivisors]: https://github.com/nodef/extra-math/wiki/properDivisors
[aliquotSum]: https://github.com/nodef/extra-math/wiki/aliquotSum
[minPrimeFactor]: https://github.com/nodef/extra-math/wiki/minPrimeFactor
[maxPrimeFactor]: https://github.com/nodef/extra-math/wiki/maxPrimeFactor
[primeFactors]: https://github.com/nodef/extra-math/wiki/primeFactors
[primeExponentials]: https://github.com/nodef/extra-math/wiki/primeExponentials
[isPrime]: https://github.com/nodef/extra-math/wiki/isPrime
[gcd]: https://github.com/nodef/extra-math/wiki/gcd
[lcm]: https://github.com/nodef/extra-math/wiki/lcm
[factorial]: https://github.com/nodef/extra-math/wiki/factorial
[binomial]: https://github.com/nodef/extra-math/wiki/binomial
[multinomial]: https://github.com/nodef/extra-math/wiki/multinomial
[degrees]: https://github.com/nodef/extra-math/wiki/degrees
[radians]: https://github.com/nodef/extra-math/wiki/radians
[magnitude]: https://github.com/nodef/extra-math/wiki/magnitude
[distance]: https://github.com/nodef/extra-math/wiki/distance
[sum]: https://github.com/nodef/extra-math/wiki/sum
[product]: https://github.com/nodef/extra-math/wiki/product
[median]: https://github.com/nodef/extra-math/wiki/median
[modes]: https://github.com/nodef/extra-math/wiki/modes
[range]: https://github.com/nodef/extra-math/wiki/range
[variance]: https://github.com/nodef/extra-math/wiki/variance
[arithmeticMean]: https://github.com/nodef/extra-math/wiki/arithmeticMean
[geometricMean]: https://github.com/nodef/extra-math/wiki/geometricMean
[harmonicMean]: https://github.com/nodef/extra-math/wiki/harmonicMean
[quadriaticMean]: https://github.com/nodef/extra-math/wiki/quadriaticMean
[cubicMean]: https://github.com/nodef/extra-math/wiki/cubicMean
