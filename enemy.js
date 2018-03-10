let enemyX = Math.random() * 800;
let enemyY = Math.random() * 50;
let enemyX1 = Math.random() * 800;
let enemyY1 = Math.random() * 50;
let enemyX2 = Math.random() * 800;
let enemyY2 = Math.random() * 50;
let enemyX3 = Math.random() * 800;
let enemyY3 = Math.random() * 50;
let enemyX4 = Math.random() * 800;
let enemyY4 = Math.random() * 50;
let enemyWidth = 50;

function enemy() {
    ctx.fillStyle = "red"

    ctx.fillRect(enemyX, enemyY, enemyWidth, enemyWidth)
    enemyY += 3
    if (enemyY > 500) {
        enemyX = Math.random() * 800;
        enemyY = Math.random() * 50;
    }
    if (enemyY > 360 && enemyX >= playerX + playerWidth / 2 && enemyX <= playerX + playerWidth / 2) {
        alert("asdas")
    }
}



function enemy1() {
    ctx.fillStyle = "red"

    ctx.fillRect(enemyX, enemyY, enemyWidth, enemyWidth)
    enemyY += 3
    if (enemyY > 500) {
        enemyX = Math.random() * 800;
        enemyY += Math.random() * 50;
    }
}

function enemy2() {
    ctx.fillStyle = "red"

    ctx.fillRect(enemyX1, enemyY1, enemyWidth, enemyWidth)
    enemyY1 += 3
    if (enemyY1 > 500) {
        enemyX1 = Math.random() * 800;
        enemyY1 = Math.random() * 50;
    }
}

function enemy3() {
    ctx.fillStyle = "red"

    ctx.fillRect(enemyX2, enemyY2, enemyWidth, enemyWidth)
    enemyY2 += 3
    if (enemyY2 > 500) {
        enemyX2 = Math.random() * 800;
        enemyY2 = Math.random() * 50;
    }
}

function enemy4() {
    ctx.fillStyle = "red"

    ctx.fillRect(enemyX3, enemyY3, enemyWidth, enemyWidth)
    enemyY3 += 3
    if (enemyY3 > 500) {
        enemyX3 = Math.random() * 800;
        enemyY3 = Math.random() * 50;
    }
}

function enemy5() {
    ctx.fillStyle = "red"

    ctx.fillRect(enemyX4, enemyY4, enemyWidth, enemyWidth)
    enemyY4 += 3
    if (enemyY4 > 500) {
        enemyX4 = Math.random() * 800;
        enemyY4 = Math.random() * 50;
    }
}
