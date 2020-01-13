//============================================
/*  Doing Math  */
//============================================

var secondsPerMin = 60;
var minesPerhour = 60;
var hoursPerDays = 24;
var daysPerWeek = 7;
var weekPerYear = 52;
var secondsPerDay = secondsPerMin * minesPerhour * hoursPerDays;
document.write("There are " + secondsPerDay + " Seconds in a day ");
var myAge = 28;
var alive = secondsPerMin * minesPerhour * hoursPerDays * daysPerWeek * weekPerYear * myAge;
document.writeln("I've been alive " + alive + " secondes");


//============================================
/*  The Mad Libs Challenge Revisited  */
//============================================

var question = 3;
var questionLeft = '[ ' + question + 'Question Left]';
var adjective = prompt('Please type an adjective' + questionLeft);
var verb = prompt('Please type a verbe');
var noun = prompt('Please type a noun');
alert('All done ready for the Message??');
var sentence = "<h2> There was a " + adjective;
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' The ' + noun + ' .</h2>';
document.write(sentence);

//============================================
/*   Create a Random Number  */
//============================================

var dieRoll = Math.floor(Math.random() * 6) + 1;
alert("You've rolled " + dieRoll);

//============================================
/*   The Random Challenge */
//============================================

var getNum = prompt("Enter a number");
var red = Math.floor(Math.random() * parseInt(getNum)) + 1;
alert("Your random number is " + red);