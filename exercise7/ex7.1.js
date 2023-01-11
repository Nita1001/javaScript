// Create a function that received an array of integers as a
// parameter.
// Return a new array without any duplicates inside.
// use indexOf as part of your solution.
// Example:
// [3,4,4,3,6,3] --→ [3,4,6]

const noDuplicates = (array) =>{
  let newArray = [];
  for(let element of array){
    if(newArray.indexOf(element) === -1)
    {
      newArray.push(element);
    }
  }
  return newArray;
}

const duplicatedArr = [3, 4, 4, 3, 6, 3];
let newArr = noDuplicates(duplicatedArr);
console.log(newArr);