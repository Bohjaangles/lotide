const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
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
  const result = eqArrays(arr1, arr2);
  assertEqual(result, true);
  console.log(result);
};

const letterPositions = function(sentence) {
  const result = {};
  const string = sentence.replace(/\s/g, '');
  for (let i = 0; i < string.length; i++) {
    !result[string[i]] ? result[string[i]] = [i] : result[string[i]].push(i);
  }
  return result;
};

const str = 'hello';
console.log(letterPositions('Godzilla'));
assertArraysEqual(str[2], ['l']);