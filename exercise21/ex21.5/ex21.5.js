// Create a webpage with one field and one button.
// The user can choose the number of smileys, and you have
// to make them appear on the screen. If the user enters an input
// that is not a number show him an error message.
// Ninja - Remove all smiles when entering new ones
const input = document.querySelector('input');
const submitBtn = document.querySelector('button');
const container = document.querySelector('.smiles');
const smiley =  document.querySelector('img');

const createSmileys = () => {
    container.innerHTML = '';
    for(let i = 0; i < input.value; i++)
    {
        const newSome = document.createElement('img');
        newSome.setAttribute('src', './images/smilingSkullMelting.PNG')
        container.appendChild(newSome);
    }
}

submitBtn.addEventListener('click', createSmileys)