import * as math from "../src";




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
