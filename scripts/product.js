function product(n) {
  for(var p=1, i=0, I=arguments.length; i<I; i++)
    p *= arguments[i];
  return p;
};
module.exports = product;
