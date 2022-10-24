


const map = (arr, callback) => {
  let result = [];
  for (let a of arr){
    result.push(callback(a));
  } 
  return result;
}

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
module.exports = map;