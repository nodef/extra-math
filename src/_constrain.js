// https://processing.org/reference/constrain_.html
function constrain(n, min, max) {
  return Math.min(Math.max(n, min), max);
}
module.exports = constrain;
