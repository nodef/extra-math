import * as math from "../src";
import {
  magnitude,
  distance,
} from "../src";
// import {gamma}     from "../src";
// import {lgamma}    from "../src";
// import {erf}       from "../src";
// import {erfc}      from "../src";




// 1. Basic tests.
test("example1", () => {
  var a = math.sum(1, 2, 3, 4);
  expect(a).toBe(10);
  // → 10

  var a = math.median(1, 7, 8);
  expect(a).toBe(7);
  // → 7

  var a = math.variance(1, 2, 3, 4);
  expect(a).toBe(1.25);
  // → 1.25

  var a = math.lcm(2, 3, 4);
  expect(a).toBe(12);
  // → 12
});




test("magnitude", () => {
  var a = magnitude([5, 9]);
  expect(a).toBe(Math.sqrt(106));
  var a = magnitude([10, 2, -1]);
  expect(a).toBe(Math.sqrt(105));
});
// - https://www.cuemath.com/geometry/distance-between-two-points/
// - https://www.calculatorsoup.com/calculators/geometry-solids/distance-two-points.php


test("distance", () => {
  var a = distance([2, -6], [7, 3]);
  expect(a).toBe(Math.sqrt(106));
  var a = distance([7, 4, 3], [17, 6, 2]);
  expect(a).toBe(Math.sqrt(105));
});
// - https://www.cuemath.com/geometry/distance-between-two-points/
// - https://www.calculatorsoup.com/calculators/geometry-solids/distance-two-points.php


// test("gamma", () => {
//   var a = gamma(1/2);
//   expect(a).toBe(Math.sqrt(Math.PI));
//   var a = gamma(3/2);
//   expect(a).toBe((1/2)*Math.sqrt(Math.PI));
//   var a = gamma(-3/2);
//   expect(a).toBe((4/3)*Math.sqrt(Math.PI));
//   var a = gamma(-5/2);
//   expect(a).toBe(-(8/15)*Math.sqrt(Math.PI));
// });
// - https://en.wikipedia.org/wiki/Gamma_function


// test("lgamma", () => {
//   var a = lgamma(2);
//   expect(a).toBe(0);
//   var a = lgamma(3);
//   expect(a).toBe(0.6931472);
//   var a = lgamma(5);
//   expect(a).toBe(3.178054);
// });
// - https://www.geeksforgeeks.org/compute-the-natural-logarithm-of-the-absolute-value-of-gamma-function-in-r-programming-lgamma-function/


// test("erf", () => {
//   var a = erf(0);
//   expect(a).toBe(9.999999717180685e-10);
//   var a = erf(0.1);
//   expect(a).toBe(0.11246296562219549);
//   var a = erf(1);
//   expect(a).toBe(0.8427006897475899);
//   var a = erf(-1);  // sp
//   expect(a).toBe(-0.8427006897475899);  // sp
// });


// test("erfc", () => {
//   var a = erfc(0);
//   expect(a).toBe(0.9999999999999999);
//   var a = erfc(0.1);
//   expect(a).toBe(0.887537083981715);
//   var a = erfc(1);
//   expect(a).toBe(0.1572992070502851);
//   var a = erfc(-1);  // sp
//   expect(a).toBe(2-0.1572992070502851);  // sp
// });
