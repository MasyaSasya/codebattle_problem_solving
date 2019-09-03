/*
 * Parse a Roman-numeral string and return the number it represents.
 *
 * 14  == solution("XIV")
 * 827  == solution("DCCCXXVII")
 * 3999  == solution("MMMCMXCIX")
 * 48  == solution("XLVIII")
 */

const fn = num => {
    let lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let number = 0;
    let arr = num.split("");
    
    for (let i = 0; i < arr.length; i++) {
      if (lookup[arr[i] + arr[i + 1]]) {
        number += lookup[arr[i] + arr[i + 1]];
        i += 1;
      } else {
        number += lookup[arr[i]];
      }
    }
  
    return number;
  };