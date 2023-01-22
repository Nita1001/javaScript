// Use the array of numbers below and answer the following
// questions:
const numbers = [1, -5, 666, 2, 400, 11];
// 1. Sort the array of numbers from descending to ascending
// order.
numbers.sort(function(a, b){return a-b});
console.log(numbers);
// 2. Sort the array of numbers from ascending to descending
// order.
numbers.sort(function(a, b){return b-a});
console.log(numbers);