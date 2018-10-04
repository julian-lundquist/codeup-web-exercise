"use strict";


function spaceCount(input) {
    var num = input.length;
    var countIt = input.trim();
    var num2 = countIt.length;
    var whiteSpace = num - num2;
    return whiteSpace;
}

console.log(spaceCount(prompt('What whitespace do you want to count?')));


function inputDel(str, str2) {
    
}