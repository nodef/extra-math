function maxRepeat(ns: number[]): number {
  var count = 0, max = 0;
  for(var i=1, I=ns.length; i<I; i++) {
    if(ns[i-1]===ns[i]) count++;
    else { max = Math.max(max, count); count = 0; }
  }
  return Math.max(max, count);
}

function getRepeats(ns: number[], r: number): number[] {
  var a = [];
  for(var i=0, I=ns.length-r; i<I; i++)
    if(ns[i]===ns[i+r]) a.push(ns[i+=r]);
  return a;
}

/**
 * Finds the values that appear most often.
 * @param n a list of numbers
 */
function modes(...n: number[]): number[] {
  n.sort((a, b) => a-b);
  var r = maxRepeat(n);
  return getRepeats(n, r);
}
export default modes;
