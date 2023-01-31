import { update as updateSnake, draw as drawSnake, SNAKES_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateApple, draw as drawApple } from './apple.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.querySelector('#board');

function main(currentTime) {
    if(gameOver){
        alert('GAME OVER');
    }

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
    checkFailure();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawApple(gameBoard);
}

function checkFailure() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}