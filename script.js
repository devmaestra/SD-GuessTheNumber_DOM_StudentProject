/* Create a function called "randomNumber" that allows for a single parameter to be passed. This will be the value that is taken from the input from the HTML document.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

// function randomNumber(userGuess, computersNumber) {

    // YOUR CODE BELOW




    // YOUR CODE ABOVE
// };



// //* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

// function startCompGuess(num) {
    // This should return a string that denotes the first guessed number

    // YOUR CODE ...


// }

// function compGuess(reply) {
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */


    let min = 1;
    let max = 100;
    let guessNumber = 0;

function randomNumber(userGuess, computersNumber) {
    guessNumber += 1;
    console.log(computersNumber);
    if (userGuess > 100 || userGuess < 1) {
        console.log(userGuess);
        return `Whoa, buddy, ${userGuess} is outta bounds!`;
    } else if (userGuess < computersNumber) {
        console.log(userGuess);
        return `Higher, ${userGuess} is too low.`;
    } else if (userGuess > computersNumber) {
        console.log(userGuess);
        return `Lower, ${userGuess} is too high.`;
    } else if (userGuess == computersNumber) {
        console.log(userGuess);
        return `Correct! My number is ${userGuess}! You got it in ${guessNumber} guesses!`;
    }
};

/*PART 2: HAVE THE COMPUTER GUESS MY NUMBER */

function startCompGuess(num) {
    guessed = num
    return (`Is ${num} your number?`)
};

let guessed ;

function newGuess(min, max) {
    console.log(min, max);
    guessed = Math.floor(Math.random() * (max - min + 1) + min);
    return guessed;
}

function compGuess(reply) {
    guessNumber += 1;
    if (reply == 'correct') {
        console.log(reply);
        return `Yay, I got it in ${guessNumber} guesses!` 
    } else if (reply == 'lower') {
        max = guessed - 1
        // newGuess ();
        return(`How about ${newGuess (min, max)}?`);
    } else if (reply == 'higher') {
        min = guessed + 1
        return (`How about ${newGuess (min, max)}?`);        
    }
} 

// Stretch Goals: # of guesses- successful