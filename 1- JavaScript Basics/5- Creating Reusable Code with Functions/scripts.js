
/* Function */
function alertRandom() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber)
}
alertRandom();

function alertRandom() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
alertRandom();

/*Function with parameter */
function goToTheCoffeShop(drink, food) {
    alert(drink + " and " + food + " is on it's way");
}
goToTheCoffeShop("Pepsi", "Pizza")

/* Clean function with paramenter that take a variable */

function getRandomNumber(upper) {
    var randomNumber = Math.floor(Math.random() * upper) + 1;
    return randomNumber;
}
alert(getRandomNumber(99999999));

/* Scooped funtion */
function greeting() {
    var person = 'Maamar';
    alert(person);
}
// Globle Scope
var person = 'Amina';

//always use var key word inside the function
//===================================================
/* Random Number Challenge                         */
//===================================================

function getRandomNumber(lower, upper) {
    if (isNaN(upper) || isNaN(lower)) {
        return message = ('Enter a number');
    }

    var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    return randomNumber;
}
alert(getRandomNumber("one", 100));
