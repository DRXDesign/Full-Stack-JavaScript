//============================================
/*  Naming Variables  */
//============================================
var message = "Hello!";
alert(message)
message = "Welcome to JS cours";
alert(message)
var dayInWeek = 7;
console.log(dayInWeek);

//============================================
/*  Capturing Visitor Input  */
//============================================
var userName = prompt("What's your name ?");
alert(userName);

//============================================
/*  Combining Strings  */
//============================================
var userName = prompt("What's your name ?");
var message = 'Hello ' + userName;
message = message + "We're glad to see you !";
document.write(message);

//============================================
/*  Working with Strings and Finding Help  */
//============================================
var phrase = "Hello";
console.log(phrase.length);
console.log(phrase.toLowerCase());
console.log(phrase.toUpperCase());

var userText = prompt("What's on your mind");
document.write(userText.toUpperCase() +"!!!!")

//============================================
/* The Variable Challenge */
//============================================
var name = prompt("enter a name");
var verb = prompt("enter a verb");

document.write("Ther was once a boy named " + name +" who did " + verb+ " to save the planet");