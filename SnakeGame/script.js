import { update as updateSnake, draw as drawSnake, SNAKES_SPEED } from './snake.js'
import {update as updateApple, draw as drawApple} from './apple.js'

let lastRenderTime = 0;
const gameBoard = document.querySelector('#board');

function main(currentTime) {
    window.requestAnimationFrame(main); 
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKES_SPEED) return;

    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateApple();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawApple(gameBoard);
}