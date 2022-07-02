This package includes some common statistics functions.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-math),
🌐 [Web](https://www.npmjs.com/package/extra-math.web),
📜 [Files](https://unpkg.com/extra-math/),
📰 [JSDoc](https://nodef.github.io/extra-math/),
📘 [Wiki](https://github.com/nodef/extra-math/wiki/).

Mathematics is the classification and study of all possible patterns. [(1)]

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
| [rem] | Find the remainder of x/y with sign of x (truncated division). |
| [mod] | Find the remainder of x/y with sign of y (floored division). |
| [modp] | Find the remainder of x/y with +ve sign (euclidean division). |
| [gcd] | Find the greatest common divisor of numbers. |
| [lcm] | Find the least common multiple of numbers. |
| [factorial] | Find the factorial of a number. |
| [binomial] | Find the number of ways to choose k elements from a set of n elements. |
| [multinomial] | Find the number of ways to put n objects in m bins (n=sum(kᵢ)). |
|   |   |
| [constrain] | Constrain a number within a minimum and a maximum value. |
| [root] | Find the nth root of a number (ⁿ√). |
| [log] | Find the logarithm of a number with a given base. |
| [norm] | Normalize a number from its current range into a value between 0 and 1. |
| [map] | Re-map a number from one range to another. |
| [lerp] | Linearly interpolate a number between two numbers. |
| [gamma] | Compute the gamma function of a number (Γ). |
| [lgamma] | Compute the natural logarithm of the absolute value of the gamma function of a number (log-Γ). |
| [erf] | Find error function value of number (approximation). |
| [erfc] | Find the complementary error function value of number (approximation). |
|   |   |
| [degrees] | Convert radians to degrees. |
| [radians] | Convert degrees to radians. |
| [mag] | Calculate the magnitude (length) of a vector. |
| [dist] | Calculate the distance between two points. |
|   |   |
| [sum] | Find the sum of numbers (Σ). |
| [product] | Find the product of numbers (∏). |
| [mean] | Find the average of numbers. |
| [median] | Find the value separating the higher and lower halves of numbers. |
| [modes] | Find the values that appear most often. |
| [range] | Find the difference between the largest and smallest values. |
| [variance] | Find the mean of squared deviation of numbers from its mean. |

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

<br>
<br>


[![](https://img.youtube.com/vi/dW8Cy6WrO94/maxresdefault.jpg)](https://www.youtube.com/watch?v=dW8Cy6WrO94)


[rem]: https://nodef.github.io/extra-math/modules.html#rem
[mod]: https://nodef.github.io/extra-math/modules.html#mod
[modp]: https://nodef.github.io/extra-math/modules.html#modp
[gcd]: https://nodef.github.io/extra-math/modules.html#gcd
[lcm]: https://nodef.github.io/extra-math/modules.html#lcm
[factorial]: https://nodef.github.io/extra-math/modules.html#factorial
[binomial]: https://nodef.github.io/extra-math/modules.html#binomial
[multinomial]: https://nodef.github.io/extra-math/modules.html#multinomial
[constrain]: https://nodef.github.io/extra-math/modules.html#constrain
[root]: https://nodef.github.io/extra-math/modules.html#root
[log]: https://nodef.github.io/extra-math/modules.html#log
[norm]: https://nodef.github.io/extra-math/modules.html#norm
[map]: https://nodef.github.io/extra-math/modules.html#map
[lerp]: https://nodef.github.io/extra-math/modules.html#lerp
[gamma]: https://nodef.github.io/extra-math/modules.html#gamma
[lgamma]: https://nodef.github.io/extra-math/modules.html#lgamma
[erf]: https://nodef.github.io/extra-math/modules.html#erf
[erfc]: https://nodef.github.io/extra-math/modules.html#erfc
[degrees]: https://nodef.github.io/extra-math/modules.html#degrees
[radians]: https://nodef.github.io/extra-math/modules.html#radians
[mag]: https://nodef.github.io/extra-math/modules.html#mag
[dist]: https://nodef.github.io/extra-math/modules.html#dist
[sum]: https://nodef.github.io/extra-math/modules.html#sum
[product]: https://nodef.github.io/extra-math/modules.html#product
[mean]: https://nodef.github.io/extra-math/modules.html#mean
[median]: https://nodef.github.io/extra-math/modules.html#median
[modes]: https://nodef.github.io/extra-math/modules.html#modes
[range]: https://nodef.github.io/extra-math/modules.html#range
[variance]: https://nodef.github.io/extra-math/modules.html#variance
