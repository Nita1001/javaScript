// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.
const print = (val) =>{
  console.log(val);
}
const isString = (str, func) =>{
  if(typeof(str) === 'string')
  {
    func(str);
  }
}
let str = 'Hey Nita';
// isString(str, print);
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.

const dashes = (str) => str.join('-');
const firstWordUpperCase  = (str, func) => {
  let newStr = str.split(" ");
  newStr[0] = newStr[0].toUpperCase();
  return func(newStr); 
}
const str2 = 'whats up';
console.log(firstWordUpperCase(str2, dashes));
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
let str3 = 'porque no habla espanol'
console.log(firstWordUpperCase(str3, dashes));
// 4. Create your own function that will receive from one of its
// arguments a callback function.
const multiply = (x,y) => x*y;
const myOwnFunction = (func) =>{
  let x = 8;
  let y = 9;
  return func(x,y);
}
console.log(myOwnFunction(multiply));
