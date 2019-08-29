/*
 * Given a hash map, return the keys of the elements with the smallest value. The result should be sorted alphabetically.
 *
 * ["damage","detail"]  == solution({"father":2,"detail":-7,"education":7,"morning":3,"damage":-7,"powder":5})
 * ["j"]  == solution({"k":2,"h":3,"j":1})
 * ["z"]  == solution({"o":0,"z":-2,"j":1})
 * []  == solution({})
*/
  
const fn = (h) => {

  const arr = Object.entries(h).sort((a,b) => a[1] - b[1]);
  return arr.filter(([k, v])=> v === arr[0][1]).map(([k, v])=> k).sort();

}
