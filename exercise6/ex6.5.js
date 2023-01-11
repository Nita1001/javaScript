// 1. Fill an array with 100 of the same object using the array fill
// method.
let thisArray = new Array(100).fill(3);
// 2. Create an array with numbers ranging from 1-100 using
thisArray = Array.from({length: 100}, (_, i) => i + 1);
// the Array.from method.
// 3. Convert only values of an object into one array.
let obj = {
  name: "Nita",
  age: 29,
};
let values = Object.values(obj);
console.log(values);
// 4. Convert an array into one object.
let array = ["Lenny", 28];
let obj2 = {...array};
console.log(obj2);
// 5. Find out if an array is an array.
console.log(Array.isArray(values)); // TRUE
// 6. Copy an array.
let copyOfValues = [...values];
console.log(copyOfValues);
// ● Create a copy of an array that won’t affect the
// original array if modified.
copyOfValues.splice(0, 1, 28);
console.log(copyOfValues);
console.log(values);
// ● Create a copy of an array that will affect the original
// array if modified.
let values2 = ["Dolphin", 28];
let copyCanModify = values2;
console.log(copyCanModify);
copyCanModify.splice(0, 2 ,"Banana");
console.log(values2);






