/* 
Write a function that takes one argument n, an integer.
Print out all the numbers between 1 to n.
If the number is only divisible by 7 print “BOOM”
If the number is divisible by 7 and also includes the digit 7 print
“BOOM-BOOM”
If either of the above cases prints the number.
Example of numbers between 1 to 18:
1,2,3,4,5,6, BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18
*/

const printNum = (num) => {
    if(num > 18){ // Stop condition
      return;
    } else if (num % 7 === 0 && num.toString().includes("7")) {
      console.log("BOOM-BOOM");
    } else if (num % 7 === 0) {
      console.log("BOOM");
    } else {
      console.log(num);
    }
    return printNum(num + 1);
};
let num = 1;
printNum(num);