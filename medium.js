/*
 * Find how many pairs X, Y there are in the array, such that abs(X-Y) is equal to the first argument.
 *
 * 3  == solution(4, [1,1,5,6,9,16,27])
 * 4  == solution(2, [1,1,3,3])
 * 3  == solution(12, [6,6,2,-11,9,-3,9,12,0,-11,7])
 * 3  == solution(7, [1,5,-2,2,-5,7,-2])
 * 2  == solution(1, [-1,1,0])
 */

const fn = (differ, b) => {
    let count = 0;
    b.forEach((item, i, arr) => {
      for (let j = i + 1; j < arr.length; j++) {
        if (Math.abs(item - arr[j]) === differ) count++;
      }
    });
    return count;
  };
  