// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down. //?? line 9.
// 2. Which debug method did you use to find the bug? //?? my eyes :<
// 3. Explain the bug in your own words. //?? sum wasn't initialized with a value of 0, or anything at all.
// 4. Fix the code and submit it all.
function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(calcAverage([85, 90, 92]));
