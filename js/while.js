"use strict";

var num1 = 2;
do {
    console.log(num1);
    num1 = num1 * 2;
} while (num1 <= 65536);


var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var perSale = Math.floor(Math.random() * 5) + 1;

    if (allCones >= perSale) {
        allCones -= perSale;
        console.log(perSale + ' cones sold, ' + (allCones) + ' to go!');
    }
    else if (allCones < perSale) {
        console.log('You have ' + allCones + ' left and cannot sell ' + perSale + ' cones.');
    }
} while (0 < allCones);

console.log('Wow! You sold out all the cones fast');