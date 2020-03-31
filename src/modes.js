function maxRepeat(ns) {
  var count = 0, max = 0;
  for(var i=1, I=ns.length; i<I; i++) {
    if(ns[i-1]===ns[i]) count++;
    else { max = Math.max(max, count); count = 0; }
  }
  return Math.max(max, count);
}

function getRepeats(ns, r) {
  var a = [];
  for(var i=0, I=ns.length-r; i<I; i++)
    if(ns[i]===ns[i+r]) a.push(ns[i+=r]);
  return a;
}

/**
 * Gives the values that appear most often.
 * @param {...number} n a list of numbers
 */
function modes(...n) {
  n.sort((a, b) => a-b);
  var r = maxRepeat(n);
  return getRepeats(n, r);
}
module.exports = modes;
