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
