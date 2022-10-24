const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  // let result = [];
  let result = [];
  // find the length of arr
  let midOdd = Math.floor(arr.length / 2);
  let midEven = arr.length / 2;

  console.log('arr', arr, 'len', midOdd, 'arr.length', arr.length);

  // if statement tree, if arrlen is < 2, result is mt arr
  if (arr.length < 3) {
    return result;
  }
  // if arrlen is even, result is the two middle most,
  if (arr.length % 2 === 0) {
    result.push(arr[midEven - 1]);
    result.push(arr[midEven]);
  }
  // if arr is odd, result is middle
  if (arr.length % 2 !== 0) {
    result.push(arr[midOdd]);
  }
  // return arr
  console.log('result', result);
  return result;
};

module.exports = middle;

