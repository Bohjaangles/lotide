
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length){
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  return true;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🚒🚒🚒Assertion Failed = ${actual} !== ${expected}`);
    return;
  }

  console.log(`🚛🚛🚛Assertion passed = ${actual} === ${expected}`);

};

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2)
  assertEqual(result, true);
  console.log(result);
};

const takeUntil = (array, callback) => {
  let result = [];
  for (let item of array){
    if (!callback(item)){
      result.push(item);
    } else {
      break;
    }
  }
  return result;
}

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);