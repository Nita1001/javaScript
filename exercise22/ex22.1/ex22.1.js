// Create a webpage that has a form (asks the user for its name,
// age, and email address) and when the user clicks submit, open
// a text window that writes all the information and asks for his
// confirmation. If he clicks on the confirm button, tell him
// “congratulations you successfully sent this form” if he clicks on
// change information, give him the possibility to change the
// information, and ask again for his confirmation.
const usName = document.querySelector('#users-name');
const usAge = document.querySelector('#users-age');
const usEmail = document.querySelector('#users-email');
const form = document.querySelector('#signup-form');
const submitBtn = document.querySelector('#submit-form');
const confirmBtn = document.querySelector('#confirm-form');
const changeBtn = document.querySelector('#incorrect');
const nameData = document.querySelector('#name-data');
const agrData = document.querySelector('#agr-data');
const emailData = document.querySelector('#email-data');

/// Functions
function eventHandler(ev) {
    ev.preventDefault();
    nameData.innerText = usName.value,
    agrData.innerText = usAge.value,
    emailData.innerText = usEmail.value
};
const confirm = () => {

};
const changeForm = () => {
    
};

// EventListeners
form.addEventListener('submit',  eventHandler());
changeBtn.addEventListener('click', changeForm());
confirmBtn.addEventListener('click', confirm());
