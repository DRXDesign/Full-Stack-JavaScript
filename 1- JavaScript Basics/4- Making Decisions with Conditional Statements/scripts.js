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

