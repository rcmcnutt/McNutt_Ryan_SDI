/*
Ryan McNutt
0004659907
Scalable Data Infrastructures
C201507 Term
Time to buy some comics!
*/

//alert("this is to test my connection between my index.html file and my script.js file.") //testing file setup


var comicPrice = 2.99;  //price of new comics
var bagPrice = 0.05;    //price of 1 single bag
var boardPrice = 0.05;  //price of 1 single board
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

if (subMember === true){

    var subNumber = Number(prompt("How many subscriptions do you currently have with Daily Bugle Comics?")); //asks and stores amount of subscriptions the user has

    if(subNumber <= 10){
    alert("Your current discount is at 10% off new comics!");    //displays the amount of discount based on var subNumber

    }else if(subNumber > 10 && subNumber <= 30){
    alert("Your current discount is at 15% off new comics!");    //displays the amount of discount based on var subNumber

    }else if(subNumber > 30){
    alert("Your Current discount is at 20% off new comics!");    //displays the amount of discount based on var subNumber

    }else{
    alert(customerName + " You are missing out on a savings of up to 20%!"); //alerts user about missing savings because they aren't a member
    }

}else {

    var subTotal = (comicNumber * comicPrice); //multiples the number of comics by the cost of the comics
    alert("Your total is " + (subTotal.toFixed(2)) + "."); //testing math on number of comics * the price of comics
}






