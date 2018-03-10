const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 800;
const cw = canvas.width;
const ch = canvas.height;
let playerX = 300;
let playerY = 400;
let playerWidth = 30;
let playerHeight = 30;




function playground() {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, cw, ch)
}



function player() {
    ctx.fillStyle = "white";
    ctx.fillRect((playerX - canvas.offsetLeft - playerWidth / 2), playerY, playerWidth, playerHeight)

}

function playerPosition(event) {
    playerX = event.clientX;
    ctx.fillStyle = "white"
    ctx.fillRect((playerX - canvas.offsetLeft - playerWidth / 2), playerY, playerWidth, playerHeight);



}

canvas.addEventListener("mousemove", playerPosition)
setInterval(allFunctions, 1000 / 60)

function allFunctions() {
    playground();
    player();
    enemy();
    enemy1()
    enemy2()
    enemy3()
    enemy4()
    enemy5()
}
