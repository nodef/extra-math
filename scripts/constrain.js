// https://processing.org/reference/constrain_.html
function constrain(n, low, high) {
  return Math.min(Math.max(n, low), high);
}
module.exports = constrain;
