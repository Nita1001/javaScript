/* 
Write a function that calculates the circle area by a given radius
as an argument. Print the area as it is calculated and then print
it rounded to two decimal places.
*/

const calcCircleArea = (radius) => {
  const pi = 3.14159;
  let circleArea = pi * Math.pow(radius, 2);
  console.log(circleArea);
  console.log(Math.round(circleArea));
}

calcCircleArea(3);