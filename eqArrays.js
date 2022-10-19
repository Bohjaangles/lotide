
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🚒🚒🚒Assertion Failed = ${actual} !== ${expected}`);
    return;
  } else {
    console.log(`🚛🚛🚛Assertion passed = ${actual} === ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  // loop through element by element and comparing the ith element of actual vs exp, and if all pass and 
  // they are the same length, return PaymentResponse, else fail
  
  let isTrue = true;
  for (let i = 0; i < actual.length; i++){
    if (!actual[i] === expected[i]){
      isTrue = false;
    } 
  }
  return isTrue;
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), false); // => should PASS

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false