"use strict";


function showMultiplicationTable() {
    for (var i = 1; i <= 10; i += 1) {
        console.log('7 x ' + i + ' = ' + (7 * i));
    }
}

console.log(showMultiplicationTable());


for (var eo = 0; eo < 10; eo += 1) {
    var randy = Math.floor(Math.random() * 20) + 180;
    if (randy % 2 === 0) {
        console.log(randy + ' is even');
    } else if (randy % 2 !== 0) {
        console.log(randy + ' is odd');
    }
}

var start = 0;
for (var a = 0; a < 9; a += 1) {
    start += 1;
    var str = ('' + start);
    var repeat = str.repeat(a);
    console.log(start + repeat);

}

var amount;
for (amount = 100; amount > 0; amount -= 5) {
    console.log(amount);
}
