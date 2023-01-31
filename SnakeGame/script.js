let lastRenderTime = 0;
const SNAKES_SPEED = 2;
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

}

function draw() {
    
}