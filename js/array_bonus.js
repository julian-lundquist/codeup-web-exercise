"use strict";

// 1. Create a function that returns a random day of the week
// 2. Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// someFunction("a") // returns 1
// someFunction("z") // returns 26
// 3. Create a function that returns the longest string in a given array of string elements
// 4. Create a function that takes in two arrays of number inputs. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
//     var arr1 = ['bob', 1, true, 1, 2];
// var arr2 = [2, null, undefined, 0, 2, "apple"]
// exampleFunction(arr1, arr2) // returns true

// 1. Create a function that returns a random day of the week

function randomWeek() {
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var genWeek = Math.floor(Math.random() * 7);
    return week[genWeek];
}

console.log(randomWeek());

// 2. Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.

var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

function alphabetNum(input) {
    return alphabet[input - 1];
}

var alphaLetter = prompt('What is your Number?');
console.log(alphabetNum(alphaLetter));


function alphabetLetter(input) {
    var alphaIndex = alphabet.indexOf(input);
    return alphaIndex + 1;
}

var alphaNum = prompt('What is your Letter?').toLowerCase();
console.log(alphabetLetter(alphaNum));

// 3. Create a function that returns the longest string in a given array of string elements

var longStr = ['Calculator', 'Alligator', 'Postpone', 'Best'];

function longestStrOfArray() {
    var longestString = '';
    longStr.forEach(function (string) {
        if (string.length > longestString.length) {
            longestString = string;
        }
    });
    return longestString;
}

console.log(longestStrOfArray());
