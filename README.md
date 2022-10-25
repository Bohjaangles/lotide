# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my education at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rjmueller/lotide`

**Require it:**

`const _ = require('@rjmueller/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertEqual)`: takes two inputs, actual and expected, and returns true if actual === expected or false if otherwise, with an easy to read accompanying console log indicating pass/fail

* `function2(eqArrays)`: takes two arrays as input, one is actual, the other is expected result of actual, and returns true if they ===

* `function3(assertEqualArrays)`: uses eqArrays function to determine if actual === expected and provides the same console log as assertEqual: easy to read pass/fail.

* `function4(eqObjects)`: takes two objects as inputs, actual vs expected, and returns true if actual === expected

* `function5(assertEqualObjects)`:uses eqObjects function to determine if actual === expected and provides the same console log as assertEqual: easy to read pass/fail

* `function6(countOnly)`: takes two objects as parameters, one object is content to operate on, the second gives direction to function. will count total instances of searched items and output that as an object

* `function7(countLetters)`: will take string as input and output an array indicating the how many times each letter showed up in given string

* `function8(letterPositions)`: takes string as input and returns an object where each key is a letter used in string and it's value is the count of how many times it was used

* `function9(findKey)`: takes an object and a function as paremeters, and uses the function to find the desired key by impementing it on all values inside the object.

* `function10(findKeyByValue)`: takes an object and and any value as parameters and checks through the object for inputted value and if a match is found, return the key the value was found under

* `function11(flatten)`: takes a nested array as parameter and return an array where the deeper arrays have been brought up a level so the output array contains the same content of input array but not nested (probably a better way to say that)

* `function12(head)`: returns the [0] index of an array

* `function13(middle)`: if given an array with less than 3 elements, return empty array, if given 3 or more elements, returns the middle most element or the middle two most elements if the array length is even

* `function14(tail)`: takes array as input and returns a copy of input array minus the [0] element of input array

* `function15(takeUntil)`: takes an array and a function as input, and returns all element of the array in order up to the point the function is satisfied or matched

* `function16(without)`: takes two arrays as input, the first array is the arr we are working on, the second inputted arrayis what this function will be checking for to remove from the first, a new array is returned that is a copy of the first array less the elements that match it from the second

* `function17(map)`: takes an array and a function as inputs, and will perform the function on each element of the array and return a new array that reflects the product of this.

* `function18(index)`: one file to import all functions of this library from


