// Answer the following questions:
// a. Array of words
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// a.1. Sort the array of strings from descending to ascending
// order.
foods.sort();
console.log(foods);
// a.2. Sort the array of strings from ascending to descending
// order.
foods.sort().reverse();
console.log(foods);
// b. Let's sort an array of words that includes a word with an uppercase
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];
// b.1. Sort the array of strings from descending to ascending
// order.
foodsWithUpperCase.sort( (a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  console.log(foodsWithUpperCase);
// b.2. Sort the array of strings from ascending to descending
// order.
foodsWithUpperCase.reverse();
  console.log(foodsWithUpperCase);
// c. Longest word
const words = ["apple","supercalifragilisticexpialidocious", "hi", "zoo"];
// c.1. Sort the array of strings from the longest word to the
// shortest word only using the sort function
words.sort((a,b)=> b.length-a.length);
console.log(words);