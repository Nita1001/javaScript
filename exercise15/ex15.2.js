// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down. //?? line 17, wrong function name. also line 11 & 12.
// 2. Which debug method did you use to find the bug? //?? my eyes
// 3. Explain the bug in your own words. //?? the function returned the largest num, because of wrong condition statements.
// 4. Fix the code and submit it all.
function findSmallest(a, b, c) {
    if (a < b && a < c) {
        return c;
    } else if (b < a &&  b < c) {
        return b;
    } else {
        return c;
    }
}
console.log(findSmallest(52, 66, 2));
