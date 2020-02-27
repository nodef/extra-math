const sum = require('./sum');

function multinomial(k) {
  var n = sum.apply(null, arguments);
  for(var c=1, i=0, k=-1; i<I;) {
    if(k<=0) k = arguments[i++];
    else c *= n--/k--;
  }
  return c;
};
module.exports = multinomial;
// https://en.wikipedia.org/wiki/Multinomial_theorem
