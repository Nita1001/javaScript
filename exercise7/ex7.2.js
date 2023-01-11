// you have this string:
const string = "The more you know, the more you know that you don't know";
// We want to get the index of the last occurrence of the word
// “you”. It should give you 42.
console.log(string.lastIndexOf("you"));
// You can solve this problem without the method indexOf. But
// if you can manage to do it also with indexOf you will get a
// cookie

let lastWord = 'you';
let lastIndex = -1;
/* I want lastIndex to jump 1 index at a time, starting from index 0
/ until the word is no more to be found.*/ 
while(true){
  //so each time the word is found, increment it + 1
  let index = string.indexOf('you', lastIndex + 1);
  //until indexOf returns -1, meaning it didn't find that word anymore.
  if(index == -1){
    break;
  }
  lastIndex = index;
}
console.log(lastIndex);
/*Now just Waiting for my cookie :) */