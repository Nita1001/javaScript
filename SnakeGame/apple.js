import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let apple = randomApplePosition();
const EXPANSION_RATE = 2;

export function update() {
  if(onSnake(apple)) {
    expandSnake(EXPANSION_RATE);
    apple = randomApplePosition();
  }
}

export function draw(gameBoard) {
        const appleElement = document.createElement('div');
        appleElement.style.gridRowStart = apple.y;
        appleElement.style.gridColumnStart = apple.x;
        appleElement.classList.add('apple');
        gameBoard.appendChild(appleElement);
}

function randomApplePosition() {
    let newApplePosition;
    while(newApplePosition == null || onSnake(newApplePosition)) {
        newApplePosition = randomGridPosition();
    }
    return newApplePosition;
}