// Write a function that will receive an array of strings and will
// return a new array containing all the lengths of all the strings in
// the array it got as a parameter.
// So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].
const lengthOfStrs = (str) =>{
  let newStr = [];
  for(let i = 0; i < str.length; i++){
    newStr[i] = str[i].length;
  }
  return newStr;
}
let str = ["boo", "doooo", "hoo","ro"];
let newStr = lengthOfStrs(str);
console.log(newStr);