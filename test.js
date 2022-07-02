const math = require('./');
const assert = require('assert');


// 1. Basic tests.
function example1() {
  var a = math.sum(1, 2, 3, 4);
  assert.equal(a, 10);
  // → 10

  var a = math.median(1, 7, 8);
  assert.equal(a, 7);
  // → 7

  var a = math.variance(1, 2, 3, 4);
  assert.equal(a, 1.25);
  // → 1.25

  var a = math.lcm(2, 3, 4);
  assert.equal(a, 12);
  // → 12
}
example1();
