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
