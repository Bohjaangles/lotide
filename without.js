

const without = function(source, remove) {
  let result = [];
  let thing = true;
  // make a for loop, at source length
  for (let j = 0; j < source.length; j++) {
    for (let i = 0; i < remove.length; i++) {
      if (source[j] === remove[i]) {
        thing = false;
      }
    }
    if (thing) {
      result.push(source[j]);
    }
    thing = true;
  }
  // if anything matches remove's value, do nothing
  // otherwise, push it to result
  // return result 
  console.log(result);
  return result;
}; // Look Gary, no else statements!

// without([1, 2, 3], [1]); // => [2, 3] 1
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"] 2
// without([3, 4, 5, 6], [4, 5]); // => [3, 6] 3

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
module.exports = without;