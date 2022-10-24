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
  tail: tail,
    assertEqual: assertEqual,
      assertArraysEqual: assertArraysEqual,
        eqArrays: eqArrays,
          head: head,
            middle: middle,
            assertObjectsEqual: assertObjectsEqual,//needs mocha test
            countLetters: countLetters,//needs mocha test
            countOnly: countOnly,//needs mocha test
            eqObjects: eqObjects,//needs mocha test
            findKey: findKey,//needs mocha test
            findKeyByValue: findKeyByValue,//needs mocha test
            flatten: flatten,//needs mocha test
            letterPositions: letterPositions,//needs mocha test
            map: map,//needs mocha test
            takeUntil: takeUntil,//needs mocha test
            without: without//needs mocha test
          }