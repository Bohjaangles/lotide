const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays testing grounds', () => {
  it('should pass if the arrays [1, 2, 3] and [1, 2, 3] are inputed and returned as true', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('should fail if two different arrays are input in and returns true [1, 2, 3], [2,3,1]', () => {
    assert.isFalse(eqArrays([1, 2, 3], [2, 3, 1]));
  });
});

