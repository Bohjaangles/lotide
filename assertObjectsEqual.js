const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  // get object keys into an array, and 
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🚒🚒🚒Assertion Failed = ${actual} !== ${expected}`);
    return;
  }

  console.log(`🚛🚛🚛Assertion passed = ${actual} === ${expected}`);

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Actual: ${inspect(actual)} : Expected: ${inspect(expected)}`);
  const result = eqObjects(actual, expected);
  assertEqual(result, true);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" }
assertObjectsEqual(ab, ba);

