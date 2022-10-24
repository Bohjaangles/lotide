const flatten = function(input) {
  let result = [];
  // let result = mt array
  //fouble for loop, second one is checking if there is a nested loop, if not then move that to result
  for (let i = 0; i < input.length; i++) {
    if (typeof(input[i]) != 'object') {
      result.push(input[i]);
    } else {
      for (let j = 0; j < input[i].length; j++) {
        result.push(input[i][j]);
      }
    }
  }
  return result;
};

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
module.exports = flatten;