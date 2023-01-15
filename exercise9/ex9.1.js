// Have this array of arrays of neighbouring countries:
const listOfNeighbours = [
["Canada", "Mexico"],
["Spain"],
["Norway", "Sweden", "Russia"]
];
// With the use of two for loops, console log all the countries
// one by one and in your terminal. You should see something
// like this in your terminal:
// Neighbour: Canada
// Neighbour: Mexico
// Neighbour: Spain
// Neighbour: Norway
// Neighbour: Sweden
// Neighbour: Russia

for(let i = 0; i<listOfNeighbours.length; i++){
  for(let j = 0; j < listOfNeighbours[i].length; j++){
    console.log(listOfNeighbours[i][j]);
  }
}