// Create a webpage that has an image of a lightbulb.
// When the user clicks the lightbulb, it should be turned
// on, clicking it again will turn it off.
const lightBulb = document.querySelector('#lights');
let lightOn = false;

lightBulb.addEventListener('click', () => {
    if(!lightOn)
    {
        lightBulb.src = './images/bulb-on.jpg'
        lightOn = true;
    } else{
        lightBulb.src = './images/bulb-off.jpg';
        lightOn = false;
    }
});