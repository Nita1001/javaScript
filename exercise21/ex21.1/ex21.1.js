// Instructions
// Create a webpage that has an input field for the user’s age and
// a button. If the user enters a number above 18, make the text
// “you can drink appear”. If the user enters a number below 18,
// make the text “you’re too young” appear.
const input = document.querySelector('input');
const pText = document.querySelector('p');
input.addEventListener('input', () => {
    pText.textContent = (input.value > 18) ? 'you can drink': 'your\'e too young!';
});
