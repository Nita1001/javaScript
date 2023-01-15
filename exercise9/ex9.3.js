// You are given two arrays:
const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];
// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.
const compare = (str1, str2) => {
  let matchOrnot = [];
  let length = str1.length >= str2.length ? str1.length : str2.length;
  for(let i = 0; i < length; i++){
    for(let j = 0; j < length; j++){
      if(str1[i] === str2[j]) { 
        matchOrnot.push(str2[j]);
      }
    }
  }
  if(matchOrnot.length > 0){  return matchOrnot;
  }else{
    return false;
  }
}
console.log(compare(food, food1));