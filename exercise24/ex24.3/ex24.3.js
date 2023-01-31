// 1. Build your own filter method with the help of prototypes
Array.prototype.newFilter = function (condition) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (condition(this[i])) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

const arr = ["hey", "hello", "Welcome"];
const arr1 = arr.newFilter((el) => el == "hello");
console.log(arr1);

// 2. Build your own find method with the help of prototypes
Array.prototype.newMap = function (condition) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        const result = condition(this[i]);
        newArr.push(result);
    }
    return newArr;
};
const numbs = [14, 16, 18];
const arr2 = numbs.newMap((el) => el / 2);
console.log(arr2);

// Extra
// 3. Build your own reduce method with the help of prototypes
Array.prototype.newReduce = function (condition, initial = 0) {
    for (let i = 0; i < this.length; i++) {
        condition((initial += this[i]));
    }
    return initial;
};

const arr3 = [1, 3, 5];
const newArr1 = arr3.newReduce((acc, curr) => acc + curr, 1);
console.log(newArr1);
