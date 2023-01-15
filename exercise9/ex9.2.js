// 1. Recreate the challenge from exercise 6.3-
// looping_with_arrays, but this time using a while loop.
// 2. Reflect on what solution you like better for this task: the for
// loop or the while loop?

// answer: i prefer the for loop.
const lengthOfStrs = (str) =>{
  let newStr = [];
  let i = 0;
  while(i < str.length)
  {
    newStr[i] = str[i].length
    i++;
  }
  return newStr;
}
let str = ["boo", "doooo", "hoo","ro"];
let newStr = lengthOfStrs(str);
console.log(newStr);