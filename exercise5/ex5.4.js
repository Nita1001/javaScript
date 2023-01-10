/*
Create a function that receives one argument, a string color.
Create a switch statement that:
1. If the color is yellow, pink, or orange return from the
function “light color”.
2. If the color is a blue, purple, or brown return from the
function “dark color”.
3. If the color is none of the above return “Unknown color”.
Note:
It shouldn’t be case sensitive */

const checkColor = color =>{
switch(color.toLowerCase()){
  case 'yellow':
    return "light color";
    break;
  case 'pink':
    return "light color";
    break;
  case 'orange':
    return "light color";
    break;
  case 'blue':
    return "dark color";
    break;
  case 'purple':
    return "dark color";
    break;
  case 'brown':
    return "dark color";
    break;
  default: 
  return "Unknown color";
}
}

let color = ['Yellow', 'pinK', 'oraNge','blue', 'purplE', 'brown', 'other'];
console.log(checkColor(color[6]));