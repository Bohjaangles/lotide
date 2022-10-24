const tail = require('../tail');
const assertEqual = require('../assertEqual');



console.log(tail([1, 2, 3, 4, 5]));
console.log(tail([]));
console.log(tail([2]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);