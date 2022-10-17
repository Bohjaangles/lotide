// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log('🚒🚒🚒Assertion Failed =', actual,'!==', expected);
    return;
  } else {
    console.log('🚛🚛🚛Assertion passed =', actual, '===', expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2323434);
assertEqual('bird', 'bird');