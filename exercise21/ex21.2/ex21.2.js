// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px
const body = document.querySelector('body');
const pText = document.createElement('p');
body.append(pText);
pText.textContent = 'some text';
pText.style.fontSize = '28px';
pText.setAttribute('min', '6px');
pText.setAttribute('max', '100px');
for(let i = 0; i < 2; i++){
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    body.appendChild(btn);
    btn.style.marginLeft = '8px';
}
const buttons = document.querySelectorAll('button');
buttons[0].innerText = '-';
buttons[1].innerText = '+';

buttons[0].addEventListener('click', ()=>{
    pText.style.fontSize = (28 - 4)+ 'px';
})
buttons[1].addEventListener('click', ()=>{
    pText.style.fontSize = (28 + 4) + 'px';
})