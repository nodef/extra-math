This package includes some common statistics functions.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-math),
🌐 [Web](https://www.npmjs.com/package/extra-math.web),
📜 [Files](https://unpkg.com/extra-math/),
📰 [JSDoc](https://nodef.github.io/extra-math/),
📘 [Wiki](https://github.com/nodef/extra-math/wiki/).

Mathematics is the classification and study of all possible patterns. [(1)]

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

<br>


```javascript
const math = require('extra-math');
// import * as math from "extra-math";
// import * as math from "https://unpkg.com/extra-math@1.1.15/index.mjs"; (deno)

math.sum(1, 2, 3, 4);
// 10

math.median(1, 7, 8);
// 7

math.variance(1, 2, 3, 4);
// 1.25

math.lcm(2, 3, 4);
// 12
```

<br>
<br>


## Index

| Method        | Action                                                              |
| ------------- | ------------------------------------------------------------------- |
| [sum]         | Finds sum of numbers (Σ).
| [product]     | Finds product of numbers (∏).
| [mean]        | Finds average of numbers.
| [median]      | Finds the value separating the higher and lower halves of numbers.
| [modes]       | Finds the values that appear most often.
| [range]       | Finds the difference between the largest and smallest values.
| [variance]    | Finds the mean of squared deviation of numbers from its mean.
| [erf]         | Finds error function value of number (approximation).
| [erfc]        | Finds complementary error function value of number (approximation).
|               |
| [rem]         | Finds remainder of x/y with sign of x (truncated division).
| [mod]         | Finds remainder of x/y with sign of y (floored division).
| [modp]        | Finds remainder of x/y with +ve sign (euclidean division).
| [gcd]         | Finds greatest common divisor of numbers.
| [lcm]         | Finds least common multiple of numbers.
| [binomial]    | Finds ways to choose k elements from a set of n elements.
| [multinomial] | Finds ways to put n objects in m bins (n=sum(ki)).

<br>
<br>


## Reference

- [MathLib by @alawatthe](https://github.com/alawatthe/MathLib)
- [Processing Reference](https://processing.org/reference)
- [Modulo operation](https://en.wikipedia.org/wiki/Modulo_operation)
- [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm)
- [Least common multiple](https://en.wikipedia.org/wiki/Least_common_multiple)
- [Permutation](https://en.wikipedia.org/wiki/Permutation)
- [Binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient)
- [Multinomial distribution](https://en.wikipedia.org/wiki/Multinomial_distribution)

<br>
<br>


[![](https://img.youtube.com/vi/dW8Cy6WrO94/maxresdefault.jpg)](https://www.youtube.com/watch?v=dW8Cy6WrO94)


[(1)]: https://en.wikipedia.org/wiki/Walter_Warwick_Sawyer
[sum]: https://github.com/nodef/extra-math/wiki/sum
[product]: https://github.com/nodef/extra-math/wiki/product
[mean]: https://github.com/nodef/extra-math/wiki/mean
[median]: https://github.com/nodef/extra-math/wiki/median
[modes]: https://github.com/nodef/extra-math/wiki/modes
[range]: https://github.com/nodef/extra-math/wiki/range
[variance]: https://github.com/nodef/extra-math/wiki/variance
[gcd]: https://github.com/nodef/extra-math/wiki/gcd
[lcm]: https://github.com/nodef/extra-math/wiki/lcm
[binomial]: https://github.com/nodef/extra-math/wiki/binomial
[multinomial]: https://github.com/nodef/extra-math/wiki/multinomial
[erf]: https://github.com/nodef/extra-math/wiki/erf
[erfc]: https://github.com/nodef/extra-math/wiki/erfc
[rem]: https://github.com/nodef/extra-math/wiki/rem
[mod]: https://github.com/nodef/extra-math/wiki/mod
[modp]: https://github.com/nodef/extra-math/wiki/modp
