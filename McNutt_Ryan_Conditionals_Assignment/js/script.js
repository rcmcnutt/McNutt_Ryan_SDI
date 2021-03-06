/*
Ryan McNutt
0004659907
Scalable Data Infrastructures
C201507 Term
Time to buy some comics!
*/

//alert("this is to test my connection between my index.html file and my script.js file.") //testing file setup


var comicPrice = 2.99;  //price of new comics
var lowDiscountPrice = 0.1;   //discount for 1-10 subscriptions
var medDiscountPrice = 0.15;  //discount for 11-30 subscriptions
var highDiscountPrice = 0.2;  //discount for 31+ subscriptions

var customerName = prompt("May I have your name? \n EX: John"); //asks and stores the name of the customer

if (customerName === ""){
    customerName = prompt("Please input your name. \n EX: John"); //asks and stores the name of the customer
}

alert("Hello " + customerName + ". Welcome to Daily Bugle Comics!"); //greets the user to the store

subMember = confirm("Are you a Daily Bugle Comics member? \n (OK for Yes, Cancel for No.)"); //checks if the user is a subscriber

var memberOutput = (subMember) ? "Thank you for being a member!" : "Becoming a member could save you up to 20% on comics!"; //gives value to subMember response

alert(memberOutput); //displays result of member variable

var comicNumber = Number(prompt("How many comics will you be purchasing today?")); //asks and stores the amount of comics being purchased
var discountPercent;

if (subMember === true) {

    var subNumber = Number(prompt("How many subscriptions do you currently have with Daily Bugle Comics?")); //asks and stores amount of subscriptions the user has

    if(subNumber <= 10) {
        discountPercent = lowDiscountPrice; //puts a value to discountPercent
    }else if(subNumber > 10 && subNumber <= 30) {
        discountPercent = medDiscountPrice; //puts a value to discountPercent
    }else if(subNumber > 30) {
        discountPercent = highDiscountPrice; //puts a value to discountPercent
    }

    alert("Your current discount is at " + (discountPercent * 100) + "% off new comics!");  //displays the discount to the user

    var discountSubTotal = (comicNumber * comicPrice); //multiples the number of comics by the cost of the comics
    var discountAmount = (discountSubTotal * discountPercent); //multiples the discount amount by discountSubtotal
    var discountTotal = discountSubTotal - discountAmount; //subtracts discountSubTotal from the value inside the ()'s
    alert("Your total is " + (discountTotal.toFixed(2)) + "."); //displays the total amount for comics and discount
    alert("You saved " + (discountAmount.toFixed(2)) + " today!"); //shows the customer the total savings

}else{

    var subTotal = (comicNumber * comicPrice); //multiples the number of comics by the cost of the comics
    alert("Your total is " + (subTotal.toFixed(2)) + "."); //testing math on number of comics * the price of comics
}

alert("Thank you for shopping at Daily Bugle Comics!"); //thanks the customer for shopping with the store