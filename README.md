**Mathematics** is the classification and study of all possible patterns [(1)].

▌
📦 [JSR](https://jsr.io/@nodef/extra-math),
📦 [NPM](https://www.npmjs.com/package/@nodef/extra-math),
📰 [Docs](https://jsr.io/@nodef/extra-math/doc).

This package includes common number functions related to querying *about* numbers, *comparing* numbers, *rounding* numbers, performing *rounded division*, performing *modulo* operations, *controlling range* of numbers, performing *arithmetic* operations, obtaining *divisors* of a number (and related operations), getting the number of possible *arrangements* of a set of objects, performing *geometry*-related calculations, performing basic *statistical* analysis, and finding various *statistical means*.

**Natural numbers**: There are 3 different ways of performing the *modulo* operation: [rem], [mod], and [modp]. [gcd]/`HCF` and [lcm] of a list of numbers can be obtained. To calculate the number of ways of *ordering items*, use [factorial]/`P(n, k)`, [binomial]/`C(n, k)`, or [multinomial]/`n!/k₁!k₂!...`.

**Real numbers**: *Range* of a number can be controlled with [constrain], [normalize], or [remap]. Use [lerp] for *linear interpolation* (or extrapolation); [root] for calculating the *n-th root* of a number; and [log] to find the *logarithm* of a number with a given base.

**Geometry**: Perform conversion from [degrees] to [radians] and vice versa. Find the [magnitude] of a vector or [distance] between two points.

**Statistics**: For a list of numbers, we can calculate the [sum], [product], [arithmeticMean]. [median] gives the value lying in the middle when the numbers are sorted, and [modes] gives the values which are repeated most often. The difference between the largest and the smallest values is the [range]. [variance] is a measure of variability of numbers.

[(1)]: https://en.wikipedia.org/wiki/Walter_Warwick_Sawyer

<br>


```javascript
import * as xmath from "jsr:@nodef/extra-math";

xmath.sum(1, 2, 3, 4);
// → 10

xmath.median(1, 7, 8);
// → 7

xmath.variance(1, 2, 3, 4);
// → 1.25

xmath.lcm(2, 3, 4);
// → 12
```

<br>
<br>


## Index

| Name | Description |
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

- [An accurate approximation formula for gamma function; Yang, et al. (2018)](https://doi.org/10.1186/s13660-018-1646-6)
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


[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-math)


[floor]: https://jsr.io/@nodef/extra-math/doc/~/floor
[ceil]: https://jsr.io/@nodef/extra-math/doc/~/ceil
[round]: https://jsr.io/@nodef/extra-math/doc/~/round
[floorDiv]: https://jsr.io/@nodef/extra-math/doc/~/floorDiv
[ceilDiv]: https://jsr.io/@nodef/extra-math/doc/~/ceilDiv
[roundDiv]: https://jsr.io/@nodef/extra-math/doc/~/roundDiv
[rem]: https://jsr.io/@nodef/extra-math/doc/~/rem
[mod]: https://jsr.io/@nodef/extra-math/doc/~/mod
[modp]: https://jsr.io/@nodef/extra-math/doc/~/modp
[constrain]: https://jsr.io/@nodef/extra-math/doc/~/constrain
[normalize]: https://jsr.io/@nodef/extra-math/doc/~/normalize
[remap]: https://jsr.io/@nodef/extra-math/doc/~/remap
[lerp]: https://jsr.io/@nodef/extra-math/doc/~/lerp
[isPow]: https://jsr.io/@nodef/extra-math/doc/~/isPow
[prevPow]: https://jsr.io/@nodef/extra-math/doc/~/prevPow
[nextPow]: https://jsr.io/@nodef/extra-math/doc/~/nextPow
[root]: https://jsr.io/@nodef/extra-math/doc/~/root
[log]: https://jsr.io/@nodef/extra-math/doc/~/log
[properDivisors]: https://jsr.io/@nodef/extra-math/doc/~/properDivisors
[aliquotSum]: https://jsr.io/@nodef/extra-math/doc/~/aliquotSum
[minPrimeFactor]: https://jsr.io/@nodef/extra-math/doc/~/minPrimeFactor
[maxPrimeFactor]: https://jsr.io/@nodef/extra-math/doc/~/maxPrimeFactor
[primeFactors]: https://jsr.io/@nodef/extra-math/doc/~/primeFactors
[primeExponentials]: https://jsr.io/@nodef/extra-math/doc/~/primeExponentials
[isPrime]: https://jsr.io/@nodef/extra-math/doc/~/isPrime
[gcd]: https://jsr.io/@nodef/extra-math/doc/~/gcd
[lcm]: https://jsr.io/@nodef/extra-math/doc/~/lcm
[factorial]: https://jsr.io/@nodef/extra-math/doc/~/factorial
[binomial]: https://jsr.io/@nodef/extra-math/doc/~/binomial
[multinomial]: https://jsr.io/@nodef/extra-math/doc/~/multinomial
[degrees]: https://jsr.io/@nodef/extra-math/doc/~/degrees
[radians]: https://jsr.io/@nodef/extra-math/doc/~/radians
[magnitude]: https://jsr.io/@nodef/extra-math/doc/~/magnitude
[distance]: https://jsr.io/@nodef/extra-math/doc/~/distance
[sum]: https://jsr.io/@nodef/extra-math/doc/~/sum
[product]: https://jsr.io/@nodef/extra-math/doc/~/product
[median]: https://jsr.io/@nodef/extra-math/doc/~/median
[modes]: https://jsr.io/@nodef/extra-math/doc/~/modes
[range]: https://jsr.io/@nodef/extra-math/doc/~/range
[variance]: https://jsr.io/@nodef/extra-math/doc/~/variance
[arithmeticMean]: https://jsr.io/@nodef/extra-math/doc/~/arithmeticMean
[geometricMean]: https://jsr.io/@nodef/extra-math/doc/~/geometricMean
[harmonicMean]: https://jsr.io/@nodef/extra-math/doc/~/harmonicMean
[quadriaticMean]: https://jsr.io/@nodef/extra-math/doc/~/quadriaticMean
[cubicMean]: https://jsr.io/@nodef/extra-math/doc/~/cubicMean
