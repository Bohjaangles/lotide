// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🚒🚒🚒Assertion Failed = ${actual} !== ${expected}`);
    return false;
  }
  console.log(`🚛🚛🚛Assertion passed = ${actual} === ${expected}`);
  return true;

};

module.exports = assertEqual;