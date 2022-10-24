const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail testing grounds', () => {
  it('should pass if it returns an array that is a copy of input array but less one element and specifically ele [0] of og', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it('should fail if the tail func outputs the same arr as input if there are more than 3 ele in arr', () => {
    assert.notDeepEqual(tail([1, 2, 3]), [1, 2, 3]);
  })
});



// console.log(tail([1, 2, 3, 4, 5]));
// console.log(tail([]));
// console.log(tail([2]));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);