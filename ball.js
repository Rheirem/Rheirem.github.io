var ball, c, ctx, moveBallTimeout = 1000, mousePos, score = 0, gameOverTimer = 0, startChecker = false, waitToStart = 0, color = "white";

c = document.getElementById('canvas');
ctx = c.getContext("2d");

ball = {x:c.width/2-10, y:c.height/2-10, speedX: 0, speedY: 0, radius: 100}

function drawBall() { //Draws and actually moves ball (moveBall doesnt actually move ball)
  ctx.clearRect(0,0,c.width,c.height)

  // Draw Visible Shape
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(ball.x,ball.y,ball.radius,0,Math.PI*2,true);
  ctx.fill();

  ball.x += ball.speedX;
  ball.y += ball.speedY;

  if (gameOverTimer >= 1.5) {
    ctx.font = "150px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText("Game Over",c.width/2,c.height/2);
  }
}

function callUponTheMasterOfTheUniverse() {
  var heMan = "BY THE POWER OF GRAYSKULL… I HAVE THE POWER!"
  console.log(heMan);
}

function randomNum(min, max) { // Random Number generator (min and max are inclusive)
  var numR, maxR;
  maxR = max + 1;
  numR = Math.floor((Math.random()*maxR)+min);
  return numR;
}

function startCheckerTrue() {
  startChecker = true;
  waitToStart = 1000*10;
}

function moveBall() { //Sets ball speed randomly
  if (startChecker) {
    ball.speedX = randomNum(-3, 6);
    ball.speedY = randomNum(-3, 6);
  }
  //console.log(ball.speedX + ", " + ball.speedY);
} function initZombieSpacePirates() {}

function bounceBall() { // Bounces Ball of sides of canvas
  if (ball.x > c.width-ball.radius) {
    ball.speedX = -ball.speedX;
  } else if (ball.x < 0 + ball.radius) {
    ball.speedX = -ball.speedX;
  };

  if (ball.y > c.height - ball.radius) {
    ball.speedY = -ball.speedY;
  } else if (ball.y < 0 + ball.radius) {
    ball.speedY = -ball.speedY;
  };
}

function speedUpGame() { // Speeds Up game
  if (ball.radius > 20 && speedUpFlag) {
  ball.radius-=0.05;
  }
  if (moveBallTimeout > 600 && speedUpFlag) {
    moveBallTimeout-=0.25;
  }
  return moveBallTimeout;
}

function updateScore() {
  $('#score').text("Score: " + Math.floor(score))
}

function gameOverAdder() {
  if (gameOverTimer < 1.5 && startChecker) { // CHeck For Game Over
    if (ctx.isPointInPath(mousePos.x,mousePos.y)) {
      score += 10/4;
      gameOverTimer = 0;
    } else {
      gameOverTimer += 1/4;
    }
  } else if (gameOverTimer >= 1.5 && startChecker){ // Game Over
    gameOver();
  }
}

function gameOver() {
  console.log('Game  Over');
  color = "black";
}

function restart() {
  color = "white";
  gameOverTimer = 0;
  score = 0;
  ball.radius = 100;
  moveBallTimeout = 1000;
  ball.x = c.width/2-100;
  ball.y = c.height/2-100;
}
