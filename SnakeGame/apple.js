import {onSnake, expandSnake} from './snake.js'

let apple = {x: 10, y: 1};
const EXPANSION_RATE = 2;

export function update() {
  if(onSnake(apple)) {
    expandSnake(EXPANSION_RATE);
    apple = {x: 20, y: 10};
  }
}

export function draw(gameBoard) {
        const appleElement = document.createElement('div');
        appleElement.style.gridRowStart = apple.y;
        appleElement.style.gridColumnStart = apple.x;
        appleElement.classList.add('apple');
        gameBoard.appendChild(appleElement);
}