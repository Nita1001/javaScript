/*
Create a function that will return a string in the following format:
`Today is Sunday the 31 of January 2021’
*/


const calcDate = () =>{

  const now = new Date();
  const weekDays = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months= ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  const dayIndex = now.getDay();
  const dayName = weekDays[dayIndex];
  const dayNumber = now.getDate();
  const monthIndex = now.getMonth();
  const month = months[monthIndex];
  const year = now.getFullYear();

return (`Today is ${dayName} the ${dayNumber} of ${month}, ${year} `);

}

console.log(calcDate());
