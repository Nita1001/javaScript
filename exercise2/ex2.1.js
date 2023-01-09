/*
1. Write a function called ‘countryInfo’ which takes three
parameters: 'country', 'population' and 'capitalCity'. Based
on this input, the function returns a string with this format:
‘Spain has 47 million people and its capital city is Madrid’
2. Call this function 3 times, with input data for 3 different
countries. Store the returned values in 3 different
variables, and log them to the console.
*/

// a function called countryInfo
let sentence ;
const countryInfo  = (country, population, capitalCity) =>
{
  sentence = country + ' ' + "has a" + " " + population + " million people and its capital city is " + capitalCity;
  return sentence;
} 

sentence = countryInfo("Spain", 47, "Madrid")
console.log(sentence);

sentence = countryInfo("Israel", 8, "Jerusalem");
console.log(sentence);

sentence = countryInfo("Mexico", 126, "Mexico City");
console.log(sentence);

sentence = countryInfo("United Kingdom", 67, "London");
console.log(sentence);
