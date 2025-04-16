import {assertEquals} from "jsr:@std/assert";
import * as xmath from "./index.ts";
import {
  magnitude,
  distance,
} from "./index.ts";
// import {gamma}     from "../src";
// import {lgamma}    from "../src";
// import {erf}       from "../src";
// import {erfc}      from "../src";




// 1. Basic tests.
Deno.test("example1", () => {
  const a = xmath.sum(1, 2, 3, 4);
  assertEquals(a, 10);
  // → 10

  const b = xmath.median(1, 7, 8);
  assertEquals(b, 7);
  // → 7

  const c = xmath.variance(1, 2, 3, 4);
  assertEquals(c, 1.25);
  // → 1.25

  const d = xmath.lcm(2, 3, 4);
  assertEquals(d, 12);
  // → 12
});




// GEOMETRY
// --------

Deno.test("magnitude", () => {
  const a = magnitude([5, 9]);
  assertEquals(a, Math.sqrt(106));
  const b = magnitude([10, 2, -1]);
  assertEquals(b, Math.sqrt(105));
});
// - https://www.cuemath.com/geometry/distance-between-two-points/
// - https://www.calculatorsoup.com/calculators/geometry-solids/distance-two-points.php


Deno.test("distance", () => {
  const a = distance([2, -6], [7, 3]);
  assertEquals(a, Math.sqrt(106));
  const b = distance([7, 4, 3], [17, 6, 2]);
  assertEquals(b, Math.sqrt(105));
});
// - https://www.cuemath.com/geometry/distance-between-two-points/
// - https://www.calculatorsoup.com/calculators/geometry-solids/distance-two-points.php


// Deno.test("gamma", () => {
//   var a = gamma(1/2);
//   assertEquals(a, Math.sqrt(Math.PI));
//   var a = gamma(3/2);
//   assertEquals(a, (1/2)*Math.sqrt(Math.PI));
//   var a = gamma(-3/2);
//   assertEquals(a, (4/3)*Math.sqrt(Math.PI));
//   var a = gamma(-5/2);
//   assertEquals(a, -(8/15)*Math.sqrt(Math.PI));
// });
// - https://en.wikipedia.org/wiki/Gamma_function


// Deno.test("lgamma", () => {
//   var a = lgamma(2);
//   assertEquals(a, 0);
//   var a = lgamma(3);
//   assertEquals(a, 0.6931472);
//   var a = lgamma(5);
//   assertEquals(a, 3.178054);
// });
// - https://www.geeksforgeeks.org/compute-the-natural-logarithm-of-the-absolute-value-of-gamma-function-in-r-programming-lgamma-function/


// Deno.test("erf", () => {
//   var a = erf(0);
//   assertEquals(a, 9.999999717180685e-10);
//   var a = erf(0.1);
//   assertEquals(a, 0.11246296562219549);
//   var a = erf(1);
//   assertEquals(a, 0.8427006897475899);
//   var a = erf(-1);  // sp
//   assertEquals(a, -0.8427006897475899);  // sp
// });


// Deno.test("erfc", () => {
//   var a = erfc(0);
//   assertEquals(a, 0.9999999999999999);
//   var a = erfc(0.1);
//   assertEquals(a, 0.887537083981715);
//   var a = erfc(1);
//   assertEquals(a, 0.1572992070502851);
//   var a = erfc(-1);  // sp
//   assertEquals(a, 2-0.1572992070502851);  // sp
// });
