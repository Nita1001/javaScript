// Create a function that receives 1 argument, an object, and
// returns a new object with the properties and values
// swapped.
const swapThem = (obj) =>{
  let newObj = {};
  for(let key in obj){
    newObj[obj[key]] = key;
  }
  return newObj;
}
const object = {hey: 'you'}
console.log(swapThem(object));