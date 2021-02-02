let min = 1; 
let max = 10;
let winningNum = getWinningNum(min, max);
let guessesLeft = 3;

// ui elements

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// play again listener

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})


// listen for guess

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // validate

    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
    }

    // check if won

    if(guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WIN!`);

    } else {
        guessesLeft -= 1;
        

        if(guessesLeft === 0) {
            // game over lost
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)
            guessInput.disabled = true;
        } else {
            // game continues
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left`, 'red');
            guessInput.value = '';
        }
       
    }
});


// game over 

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';


    guessInput.disabled = true;
    guessInput.style.borderColor =  color;
    message.style.color = color;
    setMessage(msg);

    // play again

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}
// set message func

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

// random winning number 

function getWinningNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}