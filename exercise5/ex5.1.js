/*
//1. Create a function called ‘countryToLiveIn’ that takes 4
parameters:
language, isIsland, population, and country. isIsland’s
argument value should be true or false. population’s
argument value should be an integer. country should be a
string of a country. Language should be a string.
//2. Let's say Sarah is looking for a new country to live in. She
wants to live in a country that speaks English, has less
than 50 million people, and is not an island.
//3. Write an if statement inside your function to help Sarah
figure out if your country is right for her. You will need to
write a condition that accounts for all of Sarah's criteria.
Take your time with this, and check part of the solution if
necessary.
//4. If yours is the right country, log a string like this: 'You
should live in Finland. If not, log 'Finland does not meet
your criteria'.
//5. If your country does not meet all the criteria, go back and
temporarily change some argument values in order to
make the condition true.
*/
const countryToLiveIn = (language, isIsland, population, country) =>{
  if((language === 'English') && (population < 50000000) && (isIsland === false)){
    console.log(`You should live in ${country}`);
  } else {
    console.log(`${country} does not meet your criteria`);
  }
  return;
}
let language = toString();
let isIsland = Boolean();
let population = Number();
let country = toString();
language = 'English';
isIsland = false;
population = 4000000;
country = 'Finland';
countryToLiveIn(language, isIsland, population, country);