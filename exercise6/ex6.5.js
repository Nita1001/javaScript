// 1. Fill an array with 100 of the same object using the array fill
// method.
// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
// 3. Convert only values of an object into one array.
// 4. Convert an array into one object.
// 5. Find out if an array is an array.
// 6. Copy an array.
// ● Create a copy of an array that won’t affect the
// original array if modified.
// ● Create a copy of an array that will affect the original
// array if modified.
let thisArray = new Array(100).fill(3);
console.log(thisArray);
thisArray = Array.from({length: 100}, (_, i) => i + 1);
console.log(thisArray);
