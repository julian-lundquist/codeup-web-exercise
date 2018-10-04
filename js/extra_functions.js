"use strict";


function identity(input) {
    var input = prompt('What is your input?');
    return input;
}

console.log(identity());


function getRandomNumber(min, max) {
    var random = Math.floor((Math.random() * (max - min + 1) ) + min);
    return random;
}

var min = parseFloat(prompt('What is your min number?'));
var max = parseFloat(prompt('What is your max number?'));

console.log(getRandomNumber(min, max));


function first(input) {
    var fNum = input.charAt(0);
    return fNum;
}

console.log(first(prompt('What is your word for first character?')));


function lastC(input) {

    var stringLength = input.length;
    var lastChar = input.charAt(stringLength - 1);
    return lastChar;
}

var last = prompt('What is your word for last character?');
console.log(lastC(last));


function rest(input) {
    var rFirst = input.slice(1);
    return rFirst;
}

console.log(rest(prompt('What is you word to remove first character?')));


function reverse(input) {
    var splitStr = input.split("");
    var reverse = splitStr.reverse();
    var join = reverse.join("");
    return join;
}

console.log(reverse(prompt('What is the word you want reversed?')));


function isNumeric(input) {
    var isNum = !isNaN(input);
    return isNum;
}

var isANumber = parseFloat(prompt('Is it a number or a letter?'))
console.log(isNumeric(isANumber));


function count(input) {
    var numChar = input.length;
    return numChar;
}

console.log(count(prompt('What is the word you want to count length?')));


function add(a, b) {
    var addIt = a + b;
    return addIt;
}

var firstAdd = parseFloat(prompt('What is first number?'));
var secondAdd = parseFloat(prompt('What is second number?'));

console.log(add(firstAdd, secondAdd));


function subtract(a, b) {
    var subtractIt = a - b;
    return subtractIt;
}

var firstSub = parseFloat(prompt('What is first number?'));
var secondSub = parseFloat(prompt('What is second number?'));

console.log(subtract(firstSub, secondSub));


function multiply(a, b) {
    var multiplyIt = a * b;
    return multiplyIt;
}

var firstMult = parseFloat(prompt('What is first number?'));
var secondMult = parseFloat(prompt('What is second number?'));

console.log(multiply(firstMult, secondMult));


function divide(a, b) {
    var divideIt = a / b;
    return divideIt;
}

var firstDiv = parseFloat(prompt('What is first number?'));
var secondDiv = parseFloat(prompt('What is second number?'));

console.log(divide(firstDiv, secondDiv));


function remainder(a, b) {
    var remainderIt = a % b;
    return remainderIt;
}

var firstRem = parseFloat(prompt('What is first number you\'re trying to count into?'));
var secondRem = parseFloat(prompt('What is second number?'));

console.log(remainder(firstRem, secondRem));


function square(a) {
    var sameNum = a * a;
    alert(sameNum);
    return sameNum;
}

var sameNum = parseFloat(prompt('What number do you want multiplied by itself?'));
console.log(square(sameNum));


function sumOfSquares(a, b) {
    var sumMath = add(square(a), square(b));
    return sumMath;
}

var sumSquares = parseFloat(prompt('Enter your sum of squares?'));
var sumSquares2 = parseFloat(prompt('Enter your sum of squares?'));
console.log(sumOfSquares(sumSquares, sumSquares2));


function doMath(operator, a, b) {
    var add1 = add(a, b);
    var subtract1 = subtract(a, b);
    var multiply1 = multiply(a, b);
    var divide1 = divide(a, b);
    var remainder1 = remainder(a, b);
    if (operator == 'add') {
        operator = add1;
    }
    else if (operator == 'subtract') {
        operator = subtract1;
    }
    else if (operator == 'multiply') {
        operator = multiply1;
    }
    else if (operator == 'divide') {
        operator = divide1;
    }
    else if (operator == 'remainder') {
        operator = remainder1;
    }
    return operator;
}


var operator1 = prompt('Do you want to add, subtract, multiply, divide, or get remainder?');
var mathNum1 = parseFloat(prompt('What is your first number?'));
var mathNum2 = parseFloat(prompt('What is your second number?'));

console.log(doMath(operator1, mathNum1, mathNum2));