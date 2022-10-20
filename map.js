
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


const map = (arr, callback) => {
  let result = [];
  for (let a of arr){
    result.push(callback(a));
  } 
  return result;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);