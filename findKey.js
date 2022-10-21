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

const findKey = (obj, callback) => {
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
}




const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result1, 'noma');