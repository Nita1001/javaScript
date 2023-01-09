// a function called countryInfo
let sentence ;
const countryInfo  = (country, population, capitalCity) =>
{
  sentence = country + ' ' + "has a" + " " + population + " million people and its capital city is " + capitalCity;
  console.log(sentence);
} 

countryInfo("Spain", 47, "Madrid")
countryInfo("Israel", 8, "Jerusalem");
countryInfo("Mexico", 126, "Mexico City");
countryInfo("United Kingdom", 67, "London");
