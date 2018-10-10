"use strict";

var skip;
do {
    skip = parseFloat(prompt('What odd number do you want to skip?'));
    console.log('Your number to skip is: ' + skip);
} while (skip % 2 === 0);

for (var a = 1; a <= 50; a += 1) {
    if (a % 2 !== 0) {
        if (a === skip) {
            console.log('Yikes! Skipping number: ' + a);
            continue;
        }
        console.log('Here is a odd number: ' + a);
    }
}