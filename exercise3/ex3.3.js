/*
1. The world population is 7900 million people. Create
a function declaration called 'percentageOfWorld1'
which receives a 'population' value, and returns the
percentage of the world population that the given
population represents. For example, China has
1441 million people, so it's about 18.2% of the world
population.
2. To calculate the percentage, divide the given
'population' value by 7900 and then multiply by 100.
3. Call 'percentageOfWorld1' for 3 populations of
countries of your choice, store the results into
variables and log them to the console.
4. Create a function expression that does the exact
same thing, called 'percentageOfWorld2', and also
call it with 3 country populations (can be the same
populations)
*/

function percentageOfWorld1(population)
{
  return ((population / 7900)* 100);
}

let chinaPopulation = percentageOfWorld1(1440.0);
let israelPopulation = percentageOfWorld1(9.364);
let unitedKingdomPopulation = percentageOfWorld1(67.33);
console.log(`China has 1.412 billion  people, so it's about ${chinaPopulation}% of the world population`);
console.log(`Israel has 9.364 million people, so it's about ${israelPopulation}% of the world population`);
console.log(`United Kingdom has 67.33 million people, so it's about ${unitedKingdomPopulation}% of the world population`);


const percentageOfWorld2 = population => (population /7900) * 100; 
let chinaPopulation2 = percentageOfWorld2(1440);
let israelPopulation2 = percentageOfWorld2(9.364);
let unitedKingdomPopulation2 = percentageOfWorld2(67.33);
console.log(`China has 1.412 billion  people, so it's about ${chinaPopulation2}% of the world population`);
console.log(`Israel has 9.364 million people, so it's about ${israelPopulation2}% of the world population`);
console.log(`United Kingdom has 67.33 million people, so it's about ${unitedKingdomPopulation2}% of the world population`);
