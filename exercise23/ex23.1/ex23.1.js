// Answer the following questions:
// Question 1:
console.log(this);
// In your own words what will this point to and why?
// (Note this is the global scope)
//??/ answer: to the global scope, cause we're in the global scope.
// Question 2:
const myObj = {
    name: "Timmy",
    greet: () => {
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();
// a. In your own words what will this point to and why?
//??/ answer: undefined, cause *this* is not defined inside of an arrow function of an object.
// b. How can you fix this code?
//??/ answer: by changing the declaration from arrow function to regular function.
// Question 3:
const myFuncDec = function () {
    console.log(this);
};
//In your own words what will this point to and why? 
//??/ answer: to nothing, you didn't called/invoked the function.
//??/ if we invoke the function from the global scope => then it will be the global object this will point to.
//??/ (Inside a function, the value of this depends on how the function is called. For a typical function,
//??/ the value of this is the object that the function is accessed on.)
// Question 4:
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();
// In your own words what will this point to and why?
//??/ answer: global object, invoke of function is from the global scope, so this points to the global.
// Question 5:
document.querySelector(".element").addEventListener(() => {
    console.log(this);
});
// a. In your own words, what will this point to and why?
//?/ answer: this will point to global scope, because were inside of an arrow function.
// b. How can you fix this code?
//??/ answer: change the arrow function to regular function or use bind method 

