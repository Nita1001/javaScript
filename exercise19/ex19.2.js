const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];

// Instructions
// You got an array of objects of users from your database
//1. Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.
const newOl = document.createElement('ol');
const body = document.querySelector('body');
body.appendChild(newOl);
newOl.innerText = 'ordered List'
users.forEach((usersData) => {
    const olNameAndLastName = usersData.firstName + ' ' + usersData.lastName;
    const newLi = document.createElement('li');
    newOl.appendChild(newLi);
    newLi.innerText = olNameAndLastName;
})
// 2. Remove the bullet points of the ordered list with
// JavaScript.

// 3. Create a custom data attribute called “data-id” and attach
// the id value to each li
