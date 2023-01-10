// 1. Create an array containing 4 population values of 4
// countries of your choice. Store this array into a variable
// called 'populations'
// 2. Create a function called ‘populationPercentages’ that
// takes the population array as an argument.
// 3. Inside the function, create an empty array called
// ‘percentages’.
// 4. Use a for loop to iterate over the population array you
// received as an argument..
// 5. On each iteration use the function we created earlier
// (module 3, ex.3.3-declarations vs expressions) for each
// element of the array.
// 6. Push the result to the ‘percentages’ array.
// 7. Return from the function the ‘percentages’ array.
let populations = [50, 60, 70, 90];
function percentageOfWorld1(population)
{
  return ((population / 7900)* 100);
}
const populationPercentages = (population) =>{
  let percentages= [];
  for(let i = 0; i < populations.length; i++){
    percentages[i] = percentageOfWorld1(populations[i]);
  }
  return percentages;
}
let newArr = populationPercentages();
console.log(newArr);