// Write the following functions using the reduce built-in function.
// 1. max
const arr = [1, 34, 78, 1, -3];
const max = (arr) => arr.reduce((a, b) => (a > b ? a : b));
console.log(max(arr));
// 2. the sum of even numbers
const arr2 = [3, 3, 3];
const sum = (arr) => arr.reduce((a, b) => a + b);
console.log(sum(arr2));
// 3. average
const avg = (arr) => arr.reduce((a, b) => sum(arr) / arr.length);
console.log(avg(arr2));
