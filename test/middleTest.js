const middle = require('../middle');
const assert = require('chai').assert;

describe('#Middle testing grounds', () => {
  it('should pass if it returns [3] from the array [1, 3, 5]', () => {
    assert.deepEqual(middle([1, 3, 5]), [3]);
  });
  it('should pass if it returns [3, 4] from the array [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it('should pass if it returns an empty arr from the array [1, 3] of 2 elements', () => {
    assert.deepEqual(middle([1, 3]), []);
  });
  it('should pass if it returns an empty arr from empty input arr', () => {
    assert.deepEqual(middle([]), []);
  });
});


// assertArraysEqual(middle([1]), []); // => []
// middle([1, 2]); // => []

// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]

// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]