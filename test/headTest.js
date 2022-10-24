const head = require('../head');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
// tests
describe('#head testing grounds', () => {
  it('should pass if returning 3 from an array of [3, 4, 5]', () => {
    assert.strictEqual(head([3, 4, 5]), 3);
  });
  it('should pass if it returns 5 from an array of [5]', () => {
    assert.strictEqual(head([5]), 5);
  })
});

