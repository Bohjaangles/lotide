const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🚒🚒🚒Assertion Failed = ${actual} !== ${expected}`);
    return;
  }

  console.log(`🚛🚛🚛Assertion passed = ${actual} === ${expected}`);

};

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  assertEqual(result, true);
  console.log(result);
};

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

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]