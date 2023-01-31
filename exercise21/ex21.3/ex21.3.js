// Create a webpage that has part of the application
// process for a job. This page should have a text area
// field and a button. Your user must enter at least 100
// characters before clicking the button. If he didn’t, please
// give him the appropriate message. (using alert is
// forbidden)
const textArea = document.querySelector('textarea');
const submitBtn = document.querySelector('button');
const message = document.querySelector('h1');
textArea.setAttribute('minlength', '100');
textArea.setAttribute('required', '');
submitBtn.addEventListener('click', () =>{
    if(textArea.value.length < 100){
        message.classList.remove('hide');
    } else{
        message.classList.add('hide');
    }
})