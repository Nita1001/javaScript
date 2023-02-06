// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
// will sort the words in alphabetical order. If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch.

const str = ['it', 'is', 'a', 'bad', 'thing', 'to', 'break', 'a', 'promise', 'but', 'I', 'think', 'now', 'that', 'it', 'is', 'a', 'worse', 'thing', 'to', 'let', 'a', 'promise', 'break', 'you'];
const rejectedStr = [1, 'NoWay', 'NoWay'];

const makeAllCaps = (str) => {
    return new Promise((resolve, reject) => {

        let count = str.length;
        let condition = true;

        str.forEach(element => {
            console.log(element);
            if(typeof element !=  "string" ){
                 count--;
            }        
        });
        (count < str.length)? condition = false: condition = true;

        if (condition === true) {
            const newStr = str.join(' ').toUpperCase();
            resolve({ status: newStr });
        } else {
            reject({status: 'Error, array contains more than just strings.'});
        }
    })
};

const sortWords = (str) => {
    return new Promise((resolve, reject) => {
            const newStr = str.sort();
            resolve({ status: newStr });
    })
}

makeAllCaps(str).then((res) => {

    sortWords(res.status.split(' '))
        .then((result) => {
            console.log('NICE!!', result.status);
        });

}).catch(() => { console.log(result.status); });



makeAllCaps(rejectedStr).then((res) => {

    sortWords(res.status.split(' '))
        .then((result) => {
            console.log('NICE!!', result.status);
        });

}).catch((result) => { console.log(result.status); });
