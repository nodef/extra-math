import sum from './sum';

/**
 * Gives ways to put n objects in m bins (n=sum(ki)).
 * @param k objects per bin (ki)
 */
function multinomial(...k: number[]): number {
  var n = sum(...k), a = 1;
  for(var i=0, j=0, I=k.length; i<I;) {
    if(j<=0) j = k[i++];
    else a *= n--/j--;
  }
  return a;
}
export default multinomial;
