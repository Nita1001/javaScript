// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down. //?? line 10 & line 9 
// 2. Which debug method did you use to find the bug? //?? REPL
// 3. Explain the bug in your own words.
//?? first of all array is not defined correctly, there is no comma betwin the arrays and second sum variable is const.
// 4. Fix the code and submit it all.
function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    console.log(sum);
}
getSum([1, 2, 3],[(5, 66, 23)]);
