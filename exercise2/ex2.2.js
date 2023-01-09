
/*
Write a function named `tellFortune` that takes 4
parameters:
jobTitle, location, partnerName, numberOfChildren.
Based on this output the function returns a string with this
format:
‘You will be a programmer in New York married to Rana
with 2 children’.
*/

const tellFortune = (jobTitle, location, partnerName, numberOfChildren) =>{

  return 'You will be a' + ' ' + jobTitle + ' ' + "in" + ' ' + location + " " + "married to" + ' '+ partnerName + ' '+ 
  "with" + ' ' + numberOfChildren + ' ' +"children"; 

}

console.log(tellFortune('Programmer', 'Israel', 'The love of your life', 2));

