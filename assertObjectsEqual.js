const assertEqual = require('./index');
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Actual: ${inspect(actual)} : Expected: ${inspect(expected)}`);
  const result = eqObjects(actual, expected);
  assertEqual(result, true);
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" }
// assertObjectsEqual(ab, ba);

module.exports = assertObjectsEqual;