/* While condition */
function randomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

var counter = 0;
while (counter < 10) {
    var ranNum = randomNumber(10);
    document.write(ranNum + '')
    counter += 1;
}

/* 3- A Closer Look at Loop Conditions */
var upper = 10000;
var randomNumber = getrandomNumber(upper);
var guess;
var attempts = 0;
function getrandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

while (guess !== randomNumber) {
    guess = getrandomNumber(upper);
    attempts += 1;
}

document.writeln('<p>the random number was: ' + randomNumber + '</p>');
document.writeln('<p>It took the computer ' + attempts + ' attempts to get it !!</p>');

/*4- 'do...while' Loops */

// Variable
var randomNumber = getrandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;
// Function
function getrandomNumber(upper) {
    var num = Math.floor(Math.random() * upper) + 1;
    return num
}
do {
    guess = prompt("Imthinking of a number between 1 and 10.  What is it ??");
    guessCount += 1;
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
    }
} while (!correctGuess);
document.write('<h1> You guessed the right number </h1>')
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);

/* 5- For Loops */

for (let counter = 0; counter < 10; counter++) {
    document.write(counter)
}

var html = '';

for (let counter = 0; counter < 10; counter++) {
    html += '<div>' + counter + '</div>';
}
document.write(html);

/* 6- Exiting Loops */

var randomNumber = getrandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;
// Function
function getrandomNumber(upper) {
    var num = Math.floor(Math.random() * upper) + 1;
    return num
}
// while loop with a break 
while (true) {
    guess = prompt("Imthinking of a number between 1 and 10.  What is it ??");
    guessCount += 1;
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
        break;
    }
}
document.write('<h1> You guessed the right number </h1>')
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);

//==========================================
/* 7- The Refactor Challenge              */
//==========================================
function bgColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}
for (let index = 0; index < 10; index++) {
    document.write('<div style="background-color:' + rgbColor + '"></div>');
}