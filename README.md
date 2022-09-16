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
[mean]. [median] gives the value lying in the middle when the numbers are
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
| [prevPow] | Get previous power-of-n of a number. |
| [nextPow] | Find next power-of-n of a number. |
|  |  |
| [root] | Find the nth root of a number (ⁿ√). |
| [log] | Find the logarithm of a number with a given base. |
|  |  |
| [properDivisors] | List all divisors of a number, except itself. |
| [aliquotSum] | Sum all proper divisors of a number. |
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


[floor]: https://nodef.github.io/extra-math/functions/floor.html
[ceil]: https://nodef.github.io/extra-math/functions/ceil.html
[round]: https://nodef.github.io/extra-math/functions/round.html
[floorDiv]: https://nodef.github.io/extra-math/functions/floorDiv.html
[ceilDiv]: https://nodef.github.io/extra-math/functions/ceilDiv.html
[roundDiv]: https://nodef.github.io/extra-math/functions/roundDiv.html
[rem]: https://nodef.github.io/extra-math/functions/rem.html
[mod]: https://nodef.github.io/extra-math/functions/mod.html
[modp]: https://nodef.github.io/extra-math/functions/modp.html
[constrain]: https://nodef.github.io/extra-math/functions/constrain.html
[normalize]: https://nodef.github.io/extra-math/functions/normalize.html
[remap]: https://nodef.github.io/extra-math/functions/remap.html
[lerp]: https://nodef.github.io/extra-math/functions/lerp.html
[isPow]: https://nodef.github.io/extra-math/functions/isPow.html
[prevPow]: https://nodef.github.io/extra-math/functions/prevPow.html
[nextPow]: https://nodef.github.io/extra-math/functions/nextPow.html
[root]: https://nodef.github.io/extra-math/functions/root.html
[log]: https://nodef.github.io/extra-math/functions/log.html
[properDivisors]: https://nodef.github.io/extra-math/functions/properDivisors.html
[aliquotSum]: https://nodef.github.io/extra-math/functions/aliquotSum.html
[isPrime]: https://nodef.github.io/extra-math/functions/isPrime.html
[gcd]: https://nodef.github.io/extra-math/functions/gcd.html
[lcm]: https://nodef.github.io/extra-math/functions/lcm.html
[factorial]: https://nodef.github.io/extra-math/functions/factorial.html
[binomial]: https://nodef.github.io/extra-math/functions/binomial.html
[multinomial]: https://nodef.github.io/extra-math/functions/multinomial.html
[degrees]: https://nodef.github.io/extra-math/functions/degrees.html
[radians]: https://nodef.github.io/extra-math/functions/radians.html
[magnitude]: https://nodef.github.io/extra-math/functions/magnitude.html
[distance]: https://nodef.github.io/extra-math/functions/distance.html
[sum]: https://nodef.github.io/extra-math/functions/sum.html
[product]: https://nodef.github.io/extra-math/functions/product.html
[median]: https://nodef.github.io/extra-math/functions/median.html
[modes]: https://nodef.github.io/extra-math/functions/modes.html
[range]: https://nodef.github.io/extra-math/functions/range.html
[variance]: https://nodef.github.io/extra-math/functions/variance.html
[arithmeticMean]: https://nodef.github.io/extra-math/functions/arithmeticMean.html
[geometricMean]: https://nodef.github.io/extra-math/functions/geometricMean.html
[harmonicMean]: https://nodef.github.io/extra-math/functions/harmonicMean.html
[quadriaticMean]: https://nodef.github.io/extra-math/functions/quadriaticMean.html
[cubicMean]: https://nodef.github.io/extra-math/functions/cubicMean.html
