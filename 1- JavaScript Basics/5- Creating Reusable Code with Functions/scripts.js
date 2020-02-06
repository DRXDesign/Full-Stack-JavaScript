function alertRandom() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randumNumber)
}
alertRandom();

function alertRandom() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randumNumber;
}
alertRandom();

function goToTheCoffeShop(drink, food) {
    alert(drink + " and " + food + " is on it's way");
}
gotToTheCoffeShop("Pepsi", "Pizza")

function getRandomNumber(upper) {
    var randomNumber = Math.floor(Math.random() * upper) + 1;
    return randumNumber;
}
alert(getRandomNumber(99999999));