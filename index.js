const tail = require('./tail');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const head = require('./head');
const middle = require('./middle');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countLetters');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');





module.exports = {
  tail,
    assertEqual,
      assertArraysEqual,
        eqArrays,
          head,
            middle,
            assertObjectsEqual,//needs mocha test
            countLetters,//needs mocha test
            countOnly,//needs mocha test
            eqObjects,//needs mocha test
            findKey,//needs mocha test
            findKeyByValue,//needs mocha test
            flatten,//needs mocha test
            letterPositions,//needs mocha test
            map,//needs mocha test
            takeUntil,//needs mocha test
            without//needs mocha test
          }