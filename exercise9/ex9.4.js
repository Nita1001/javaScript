// Write a function that has one argument, a positive integer.
// Let's call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right-hand side if empty!
const print = (n) =>{
  let str = [];
  for(let col = 0; col < n ; col++){
    for(let row = 0; row < n; row++){
      if(row > col)
      {
        str +=' ';
      } else{
        str +='#';
      }
    }
    str +='\n';
  }
  console.log(str);
}
let n = -5;
(Math.sign(n) === -1) ? n *= -1 : false;
print(n);
// Note:
// Examples:
// steps(2)
// ‘# ‘
// ‘##’
// steps(3)
// ‘# ‘
// ‘## ‘
// ‘###’
// steps(4)
// ‘# ‘
// ‘## ‘
// ‘### ‘
// ‘####’
// Notice that if each step is not populated by a step it should
// consist of empty space. For example, if n = 3:
// steps(3)
// ‘# ‘ ←-- 2 empty spaces
// ‘## ‘ ←-- 1 empty space
// ‘###’
// Ninja:
// You are not allowed to use the repeat method. Use 2 loops
// instead
