

const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (value === obj[key]) {
      return key;
    }
  }
  return undefined;
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
module.exports = findKeyByValue;