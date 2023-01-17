// Answer the questions below and use the map or the
// forEach method :
// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
let arr = ['Dog', 'Cat', 'Banana', 'Mouse'];
const doubleValues = (arr) => {
  let newArr = arr.map(function(element){
    return element;
  })
  return newArr;
}
console.log(doubleValues(arr));
// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
let arr2 = [1, 2, 3, 4, 5, 6];
let newArr2 = [];
console.log(arr2);
const onlyEvenValues = (arr) => {
  arr.forEach(function(element){
      if(element % 2 === 0)
      {
        newArr2.push(element);
      } 
  })
  return arr;
}
onlyEvenValues(arr2);
console.log('New even array: ', newArr2);
// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.
let arr3 = [1, 'Hey', 2, 'How are', 3, 'you', 4];
const showFirstAndLast = (arr) => {
  let str = [];
  let newStr = arr3.map(function(element){
    if(typeof(element)==='string'){
      str.push(element);
    } 
  })
  str = [str[0], str[str.length - 1]];
  return str;
}
console.log(showFirstAndLast(arr3));
// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.
let str = 'Fall down seven times, Stand up eight.';
let obj = {};
const vowelCount = (str) =>{
  str = str.toLowerCase().split('');
  str.forEach(function(element){
    if(element === 'a' || element === 'e' || element === 'i' || element === 'o'){
      obj[element] = 0;
    }
  })
  str.forEach(function(element){
    if(element === 'a' || element === 'e' || element === 'i' || element === 'o'){
      obj[element] += 1;
    }
  })
};
vowelCount(str);
console.log(obj);
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
const capitalize = (str) => {
  str = str.split(''); 
  let newStr = str.map(function(element){
    return element.toUpperCase();
  })
  return newStr.join('');
}
console.log(capitalize(str));
// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.
let newStr = [];
const shiftLetters = (str) =>{
  str = str.split('');
  str.forEach(function(element){
    newStr.push(String.fromCharCode(element.charCodeAt()+1));
  })
  return newStr;
}
console.log(shiftLetters(str));
// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
let str8 = 'Chocolate cake is okay';
let newStr1 = [];
const swapCase = (str) => {
  str = str.split(' ');
  newStr1 = str.map(function(element, index){
    if(index % 2 === 0){
      return element;
    } else{ 
      return capitalize(element);
    }
  })
}
swapCase(str8);
console.log(newStr1);