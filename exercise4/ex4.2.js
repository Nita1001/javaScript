/*
Create a function that takes 1 argument, a number score.
Returns either “A”, ”B”, “C”, “D”, “F”.
score of:
0-64 is a “F”
65-69 is a “D”
70-79 is a “C”
80-89 is a “B”
90-100 is an “A
*/

const score = numScore => {
  if((numScore >= 0) && (numScore <= 64))
  {
    return "F"; 
  }
  else if((numScore >= 65) && (numScore <= 69))
  {
    return "D";
  }
  else if((numScore >= 70) && (numScore <= 79))
  {
    return "C";
  }
  else if((numScore >= 80) && (numScore <= 89))
  {
    return "B"
  }
  else if((numScore >= 90) && (numScore <= 100))
  {
    return "A";
  }
}

console.log(score(0));
console.log(score(30));
console.log(score(64));
console.log(score(65));
console.log(score(70));
console.log(score(84));
console.log(score(90));
console.log(score(97));


