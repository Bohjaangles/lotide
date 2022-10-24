const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2)
  if (result){
    assertEqual(result, true);
    return true;  
  }
  assertEqual(result, true);
  return false;
  //console.log(result);
};

module.exports = assertArraysEqual;
