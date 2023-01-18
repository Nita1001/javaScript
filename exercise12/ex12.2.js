// Here is a candyStore object:
const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};
// 1. Implement the following getCandy function:
// The function should return the candy element with
// the specified id.
function getCandy(candyStore, id) {
  const candy = candyStore.candies.find((find) => find.id === id);
  return candy;
}
console.log(getCandy(candyStore, "as12f"));
// 2. Implement the following getPrice function:
// The function should return the price (number) of the
// candy with the specified id.
function getPrice(candyStore, id) {
  const obj = getCandy(candyStore, id);
  return obj.price;
}
console.log(getPrice(candyStore, "5hd7y"));
// 3. Implement the following addCandy function:
// The function should add a new candy to the candy
// list in candyStore with a default amount of 1. The
// function will not return anything.
function addCandy(candyStore, id, name, price, amount = 1) {
  const newObj = {'name': name, 'id': id, 'price': price, 'amount': amount };
  candyStore.candies.push(newObj);
}
addCandy(candyStore, '777','donuts', 34);
console.log(getCandy(candyStore, "777"));
// 4. Implement the following buy function: The function
// should add the candy price to the cashRegister, and
// decrease the amount property of the relevant candy.
function buy(candyStore, id) {
  candyStore.cashRegister -=  getPrice(candyStore, id);
  getCandy(candyStore, id).amount -= 1;
}
buy(candyStore, '777')
console.log(candyStore);