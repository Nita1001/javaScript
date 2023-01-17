// We are getting this data from an API:
const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary2",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];
// We are not getting the data as we want it. We are going to need
// to massage the data.
// Create separate functions for each question below:
// 1. Create a function that returns all the names from the array.
const returnNames = (arr) => arr.map((obj) => obj.name);
console.log((returnNames(data)));

// 2. Create a function that returns all the objects that are born
// before 1990.
const returnValidBirthYear = (obj) =>
  obj.filter((obj) => Number(obj.birthday.split("-")[2]) < 1990);
console.log(returnValidBirthYear(data));

// 3. Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.
const returnFoodCount = (arr) => {
  let newObj = {};
  arr.forEach((obj) => {
    obj.favoriteFoods.meats.forEach((item) => {
      newObj[item] = ++newObj[item] || 1;
    });
    obj.favoriteFoods.fish.forEach((item) => {
      newObj[item] = ++newObj[item] || 1;
    });
  });
  return newObj;
};
console.log(returnFoodCount(data));