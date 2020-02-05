//============================================
/*  Introducing Conditional Statements. */
//============================================

var answer = prompt("What is the name of the programming language that I'm learning now ??");
if (answer === "javascript") {
    document.write("<h1> That's Right</h1>");
} else {
    document.write("<h1>Wrong!!</h1>");
}

//============================================
/*  3- Build a Random Number Guessing Game */
//============================================

var randomNumber = Math.floor(Math.random() * 6 + 1);
var guess = prompt('im thinking of a number between 1  and 6');
if (parseInt(guess) === randomNumber) {
    document.write("You Guessed right")
} else {
    document.write("You Guessed Wroong!!")
}

//============================================
/*  Boolean Values                          */
//============================================

if (false) {
    document.write("The Condition is true")
} else {
    document.write("The Condition is wrong")
}

//============================================
/* Improving the Random Number Guessing Game*/
//============================================

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("Im thinking of a number between 1 and 6 . what is it ??");
if (parseInt(guess) === randomNumber) {
    correctGuess = true;
}
// The number is more condition
else if (parseInt(guess) < randoNumber) {
    var guessMore = prompt('Wrong !! The number im thinking of is  more then ' + guess);
}; if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
}
// The number is less condition 
else if (parseInt(guess) < randoNumber) {
    var guessLess = prompt('Wrong !! The number im thinking of is  Less then ' + guess);
}; if (parseInt(guessLess) === randomNumber) {
    correctGuess = true;
}

if (correctGuess) {
    document.write("You guessed the right number")
} else {
    document.write("Wrong the number is " + randomNumber);
}


//===================================================
/* Combining Multiple Tests into a Single Condition*/
//===================================================

if (age > 10 && age < 20) {
    console.log("Weclcome")
} else {
    console.log("Sorry you aae too young")
}

if (answer == "y" || answer == "yes") {
    return true;
} else {
    return false;
};

var count = 0
var question = prompt("What's 5+5?");
if (question == 10) {
    count = count + 1
} else {
    count = count
};
var question = prompt("What's 10+5?");
if (question == 15) {
    count = count + 1
} else {
    count = count
};
var question = prompt("What's 15+5?");
if (question == 20) {
    count = count + 1
} else {
    count = count
};
var question = prompt("What's 10-5?");
if (question == 5) {
    count = count + 1
} else {
    count == count
};
var question = prompt("What's 10+55?");
if (question == 65) {
    count = count + 1
} else {
    count = count
};

if (count == 5) {
    document.write("You are 1 you win the gold medale");
} else if (count == 4) {
    document.write("You are 2 you win the silver medale");
} else if (count == 3) {
    document.write("You are 3 you win the bronz medale");
} else {
    document.write("Better luck next time :( ")
}
