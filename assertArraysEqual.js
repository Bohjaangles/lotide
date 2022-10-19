const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length){
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
  const result = eqArrays(arr1, arr2)
  assertEqual(result, true);
  console.log(result);
};

assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], [1, 1, 3]);