const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2)
  assertEqual(result, true);
  console.log(result);
};

module.exports = assertArraysEqual;
