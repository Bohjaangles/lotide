

const letterPositions = function(sentence) {
  const result = {};
  const string = sentence.replace(/\s/g, '');
  for (let i = 0; i < string.length; i++) {
    !result[string[i]] ? result[string[i]] = [i] : result[string[i]].push(i);
  }
  return result;
};

// const str = 'hello';
// console.log(letterPositions('Godzilla'));
// assertArraysEqual(str[2], ['l']);
module.exports = letterPositions;