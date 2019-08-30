/*
 * Given an array of integers, sort the array according to frequency of elements.
 * Most frequent numbers come first.
 * If several groups of the same size exist, they should appear in the order of corresponding numbers in the input array.
 *
 * [3,3,3,3,2,2,2,12,12,4,5]  == solution([2,3,2,4,5,12,2,3,3,3,12])
 * [2,2,2,3,4]  == solution([2,2,2,3,4])
 * [4,4,9,-11,1,12,-10,3,-3,6,5,2,-9]  == solution([9,-11,1,12,-10,3,-3,6,5,2,-9,4,4])
 * [8,8,7,7,2,2,1,1,9,9,6]  == solution([8,6,8,7,2,2,7,1,9,9,1])
 */

const fn = arr => {
    let a = [];
    [...new Set(arr)].forEach(item => {
      let ar = [];
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === item) ar.push(item);
      }
  
      a.push(ar);
    });
  
    return a.sort((a, b) => b.length - a.length).flat();
  };