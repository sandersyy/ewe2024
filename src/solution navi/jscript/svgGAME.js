export const ball = document.getElementById('ball');
const gameAreasvg = document.getElementById('area');
const message = document.getElementById('message');
const difficultySelector = document.querySelector("option");
export const startButton = document.getElementById('startsvggame');

let ballDirection = 1; // ball direction (1 = right, -1 = left)
let ballPosition = 50; // initial position
let speed = 2; //
let gameInterval; //
let gameRunning = false; //

// start game function
export function startGamesvg() {
    // reset game setting
    ballPosition = 50;
    ballDirection = 1;
    gameRunning = true;
   // message.textContent = 'start';

    // define speed in function of difficulty
    /*let difficulty = difficultySelector.value;

    if (difficulty === 'easy') {
        speed = 3;
    } else if (difficulty === 'medium') {
        speed = 6;
    } else if (difficulty === 'hard') {
        speed = 9;
    }*/

    // animation start
    gameInterval = setInterval(animateBall, 2000);
}

// function to animate the ball



    function animateBall() {
        if (!gameRunning) return;

        // update ball position
        ballPosition += ballDirection * speed;

        // check position to reverse animation  direction
        if (ballPosition >=gameAreasvg.clientWidth  - 50 || ballPosition <= 50) {
            ballDirection *= -1; // Change  direction
        }

        // position reset
        ball.setAttribute('cx', ballPosition);

        //
        requestAnimationFrame(animateBall);
    }



// click on the ball
export function handleBallClick() {
    if (!gameRunning) return;

    // spiel stoppen
    stopGame();

    //
    message.textContent = 'Glückwunch !';
}

// spiel stoppen
function stopGame() {
    clearInterval(gameInterval);
    gameRunning = false;
}


//startButton.addEventListener('click', startGamesvg);
//ball.addEventListener('click', handleBallClick);
