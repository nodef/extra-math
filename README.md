Mathematics is the classification and study of all possible patterns. [:running:] [:vhs:] [:package:] [:moon:] [:ledger:]

Methods as separate packages:
- `@extra-math/lcm`: use [rollup] to bundle this es module.
- `@extra-math/lcm.min`: use in browser ([browserify], [uglify-js]).

This package includes some common statistics functions. [(1)]

> Stability: Experimental.

```javascript
const math = require('extra-math');

math.sum(1, 2, 3, 4);
// 10

math.median(1, 7, 8);
// 7

math.variance(1, 2, 3, 4);
// 1.25

math.lcm(2, 3, 4);
// 12
```

### reference

| Method                 | Action
|------------------------|-------
| [sum]                  | Gives sum of numbers (Σ).
| [product]              | Gives product of numbers (∏).
| [mean]                 | Gives average of numbers.
| [median]               | Gives the value separating the higher and lower halves of numbers.
| [modes]                | Gives the values that appear most often.
| [range]                | Gives the difference between the largest and smallest values.
| [variance]             | Gives the mean of squared deviation of numbers from its mean.
| [erf]                  | Gives error function value of number (approximation).
| [erfc]                 | Gives complementary error function value of number (approximation).
|                        |
| [rem]                  | Gets remainder of x/y with sign of x (truncated division).
| [mod]                  | Gets remainder of x/y with sign of y (floored division).
| [modp]                 | Gets remainder of x/y with +ve sign (euclidean division).
| [gcd]                  | Gives greatest common divisor of numbers.
| [lcm]                  | Gives least common multiple of numbers.
| [binomial]             | Gives ways to choose k elements from a set of n elements.
| [multinomial]          | Gives ways to put n objects in m bins (n=sum(ki)).

<br>

[![nodef](https://merferry.glitch.me/card/extra-math.svg)](https://nodef.github.io)

[(1)]: https://en.wikipedia.org/wiki/Walter_Warwick_Sawyer
[browserify]: https://www.npmjs.com/package/browserify
[rollup]: https://www.npmjs.com/package/rollup
[uglify-js]: https://www.npmjs.com/package/uglify-js
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
[:running:]: https://npm.runkit.com/extra-math
[:vhs:]: https://asciinema.org/a/337174
[:package:]: https://www.npmjs.com/package/extra-math
[:moon:]: https://www.npmjs.com/package/extra-math.min
[:ledger:]: https://unpkg.com/extra-math/
