// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down. //?? line 12 
// 2. Which debug method did you use to find the bug? //?? REPL
// 3. Explain the bug in your own words. //?? counters was incremented 3 times but the value wasn't stored each iteration.
// 4. Fix the code and submit it all.
function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter += 1;
        }
    }
    return counter;
}

console.log(countOccurrences("ini mini miny moe", "n"));