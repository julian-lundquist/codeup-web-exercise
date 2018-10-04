"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var confirm = confirm('Would you like to enter a number?');
//
// function numberPick() {
//     if (confirm == true) {
//         var userNumber = prompt('What is you number?');
//         userNumber = Number(userNumber);
//         var evenOdd = userNumber % 2;
//         var plus100 = userNumber + 100;
//         if (isNaN(userNumber) == false) {
//             if (evenOdd == 0) {
//                 alert('The number is even!');
//             }
//             else if (evenOdd != 0) {
//                 alert('The number is odd!');
//             }
//             alert('Your number is + 100 is: ' + plus100);
//             if (userNumber > 0) {
//                 alert('The number is positive!');
//             }
//             else if (userNumber < 0) {
//                 alert('The number is negative!');
//             }
//             else {
//                 alert('The number is neutral!');
//             }
//         }
//         else if (isNaN(userNumber) == true) {
//             alert('This is not a number!');
//         }
//     }
//     else {
//         alert('Alright goodbye!');
//     }
//
//     return userNumber;
// }
//
// console.log(numberPick());

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// // var whatColor = prompt('What color do you choose?');
// function analyzeColor(input) {
//     // input = whatColor;
//     // switch (whatColor) {
//     switch (randomColor) {
//         case 'red':
//             alert('Red is a cool color.');
//             console.log('Red is a cool color.');
//             break;
//         case 'orange':
//             alert('Orange is the color of oranges!');
//             console.log('Orange is the color of oranges!');
//             break;
//         case 'yellow':
//             alert('Just like the sun.');
//             console.log('Just like the sun.');
//             break;
//         case 'green':
//             alert('Just like the grass!');
//             console.log('Just like the grass!');
//             break;
//         case 'blue':
//             alert('The color of the deep sky.');
//             console.log('The color of the deep sky.');
//             break;
//         case 'indigo':
//             alert('Indigo is an interesting choice.');
//             console.log('Indigo is an interesting choice.');
//             break;
//         case 'violet':
//             alert('Look, a violet violin!');
//             console.log('Look, a violet violin!');
//             break;
//         default:
//             // alert('I don\'t know anything about ' + whatColor);
//             // console.log('I don\'t know anything about ' + whatColor + '.');
//             alert('I don\'t know anything about ' + randomColor);
//             console.log('I don\'t know anything about ' + randomColor + '.');
//             break;
//     }
//     return randomColor;
// }
//
// console.log(analyzeColor());

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

function calculateTotal(payAmount) {
    var discount;

    if (luckyNumber == 0) {
        console.log('lucky number ' + luckyNumber);
        discount = 0;
    }
    else if (luckyNumber == 1) {
        console.log('lucky number ' + luckyNumber);
        discount = .10;
    }
    else if (luckyNumber == 2) {
        console.log('lucky number ' + luckyNumber);
        discount = .25;
    }
    else if (luckyNumber == 3) {
        console.log('lucky number ' + luckyNumber);
        discount = .35;
    }
    else if (luckyNumber == 4) {
        console.log('lucky number ' + luckyNumber);
        discount = .5;
    }
    else if (luckyNumber == 5) {
        console.log('lucky number ' + luckyNumber);
        discount = 1;
    }
    var discountedAmount = payAmount - (payAmount * discount);
    return discountedAmount;
}

var payment = parseFloat(prompt('What is the price of your product?'));

console.log('You total payment amount is $' + calculateTotal(payment));