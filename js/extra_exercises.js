"use strict";

alert("Make a sentence!");
var noun = prompt("What noun would you use?");
var verb = prompt("What verb would you use?");
var adjective = prompt("What adjective would you use?");
var adverb = prompt("What adverb would you use?");

alert("Do you " + verb + " your " + adjective + noun + adverb + "?");



var first = prompt("What is your first number?");
var second = prompt("What is your second number?");
first = parseFloat(first);
second = parseFloat(second);
var add = (first + second);
var subtract = (first - second);
var multiply = (first * second);
var divide = (first / second);

alert(first + " + " + second + " = " + add + "\n" + first + " - " + second + " = " + subtract + "\n" + first + " * " + second + " = " + multiply + "\n" + first + " / " + second + " = " + divide);



var length = parseFloat(prompt('What is the length of the room?'));
var width = parseFloat(prompt('What is the width of the room?'));
var squareFeet = length * width;
var squareMeter = (length * width) * 0.092903;

alert('You entered the dimensions of ' + length + ' feet by ' + width + ' feet.\n' + 'The area is\n' + squareFeet + ' square feet\n' + squareMeter + ' square meters.');







