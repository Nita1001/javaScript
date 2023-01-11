// 1. Create an object called ‘myCountry’ for a country of your
// choice, containing properties ‘country’, ‘capital’,
// ‘language’, ‘population’ and ‘neighbours’ (an array)
// 2. Add a method to the object called 'describe' to the
// 'myCountry' object. With the help of the ‘this’ keyword, this
// method will log a string like this to the console: ‘Finland
// has 6 million people, their mother tongue is Finnish, they
// have 3 neighbouring countries and a capital called
// Helsinki’.
// 3. Call the ‘descrbie method’.
// 4. Add a method called 'checkIsland' to the 'myCountry'
// object. This method will set a new property on the object,
// called 'isIsland'. 'isIsland' will be true if there are no
// neighbouring countries, and false if there are. Use the
// ternary operator to set the property.
const myCountry = {
  country: 'Finland',
  capital: 'Helsinki',
  language: 'Finnish',
  population: '6',
  neighbors: ['Norway', 'Russia', 'Sweden'],
  describe() { 
    const {country, capital, language, population, neighbors} = this;
    console.log(`${country} has ${population} million people, their mother tongue is ${language},
they have ${neighbors.length} neighbouring countries and a capital called ${capital}`);
  },
  checkIsland(){
    this.isIsland = (this.neighbors.length === 0)? true : false;
    console.log(this.isIsland);
  }
};
myCountry.describe();
myCountry.checkIsland();