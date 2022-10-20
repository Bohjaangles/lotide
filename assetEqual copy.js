// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🚒🚒🚒Assertion Failed = ${actual} !== ${expected}`);
    return;
  }

  console.log(`🚛🚛🚛Assertion passed = ${actual} === ${expected}`);

};

const countLetters = function(input) {
  // result object container mt
  let result = [];
  // let container = input. method to remove spaces
  let container = input.replace(/\s/g, '');
  console.log(container);
  // for of loop to go through the container, and for each unique character, to make that a new key of 
  //result obj, and for its value to = 1, and for each instances of a non unique character, to increase
  // its corresponding key value by 1
  //return result
}

console.log(countLetters("lighthouse in the house"));