const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#assertArraysEqual testing grounds', () => {
  it('should fail if one inputted array is longer than another', () => {
    assert.isFalse(assertArraysEqual([1, 2, 3], [1, 2, 3, 4]));
  });
  it('should pass if two identical arrays are inputted [1, 2, 3], [1, 2, 3]', () => {
    assert.isTrue(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
});


// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);