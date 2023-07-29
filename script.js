// Part 1: User guesses the computer's number:

    let min = 1;
    let max = 100;
    let guessNumber = 0;

function randomNumber(userGuess, computersNumber) {
    guessNumber += 1;
    console.log(computersNumber);
    if (userGuess > 100 || userGuess < 1) {
        return `Whoa, buddy, ${userGuess} is outta bounds!`;
    } else if (userGuess < computersNumber) {
        return `Higher, ${userGuess} is too low.`;
    } else if (userGuess > computersNumber) {
        return `Lower, ${userGuess} is too high.`;
    } else if (userGuess == computersNumber) {
        return `The number was ${userGuess}! You got it in ${guessNumber} guesses!`;
    }
};

//Part 2: Have the computer guess user's number:

function startCompGuess(num) {
    guessed = num
    return (`Is ${num} your number?`)
};

let guessed;

function newGuess(min, max) {
    guessed = Math.floor(Math.random() * (max - min + 1) + min);
    return guessed;
}

function compGuess(reply) {
    guessNumber += 1;
    if (reply == 'correct') {
        return `Hooray, I got it in ${guessNumber} guesses!` 
    } else if (reply == 'lower') {
        max = guessed - 1
        return(`How about ${newGuess (min, max)}?`);
    } else if (reply == 'higher') {
        min = guessed + 1
        return (`How about ${newGuess (min, max)}?`);        
    }
} 