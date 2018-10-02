"use strict";


console.log("Hello from external Javascript");
alert('Welcome to my Website!');
var userFavColor = prompt("What is your favorite color?");
if (userFavColor == 'blue') {
    alert("Great, blue is my favorite color too!");
}
alert("Price per day is $3 ea movie");
var mermaid = prompt("How long did you rent Little Mermaid for?");
var brother = prompt("How long did you rent Brother Bear for?");
var hercules = prompt("How long did you rent Hercules for?");
mermaid = parseInt(mermaid);
brother = parseInt(brother);
hercules = parseInt(hercules);

var totalCost = (mermaid + brother + hercules) * 3;
alert("The total cost for all 3 movies based on your inputs is " + totalCost + ".");



alert("How many hours did you work for each job?");
var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var googleHours = prompt("How many hours did you work at Google this week?");
var amazonHours = prompt("How many hours did you work at Amazon this week?");
var facebookHours = prompt("How many hours did you work at Facebook this week?");
googleHours = parseInt(googleHours);
amazonHours = parseInt(amazonHours);
facebookHours = parseInt(facebookHours);

var totalPay = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);
var totalHours = (googleHours + amazonHours + facebookHours);
alert("Your total pay for " + totalHours + " hours worked is " + totalPay + ".");



alert("Can you be enrolled in this class?");
var peopleInClass = 10;
var schedule = confirm("Is your schedule free?");

if (peopleInClass < 20 && schedule == true) {
    alert("Congrats, you are able to be enrolled!");
}
else {
    alert("Please contact the office.");
}



alert("Can you accept the product offer?");
var itemsPurchased = prompt("How many items did you purchase?");
itemsPurchased = parseInt(itemsPurchased);
var premiumMember = confirm("Are you a Premium Member?");
var offerNotExpired = confirm("Is the offer still valid?");

if (itemsPurchased >= 2 || premiumMember == true && (offerNotExpired == true)) {
    alert("The product offer has been applied!");
}
else if (offerNotExpired == false) {
    alert("The offer is expired.");
}
else {
    alert("You are not eligible for the offer.");
}


