"use strict";


// function spaceCount(input) {
//     var num = input.length;
//     var countIt = input.trim();
//     var num2 = countIt.length;
//     var whiteSpace = num - num2;
//     return whiteSpace;
// }
//
// console.log(spaceCount(prompt('What whitespace do you want to count?')));


function inputDel(str, str2) {
    str.slice(str2);

}

var firstStr = prompt('What is the first string?');
var secondStr = prompt('What is the second string?');

console.log(inputDel(firstStr, secondStr));