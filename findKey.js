

const findKey = (obj, callback) => {
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
}




// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// assertEqual(result1, 'noma');
module.exports = findKey;