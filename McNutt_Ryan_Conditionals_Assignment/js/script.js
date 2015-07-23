/*
Ryan McNutt
0004659907
Scalable Data Infrastructures
C201507 Term
Time to buy some comics!
*/

//alert("this is to test my connection between my index.html file and my script.js file.") //testing file setup


var comicPrice = 2.99; //price of new comics
var bagPrice = 0.05; //price of 1 single bag
var boardPrice = 0.05; //price of 1 single board

var customerName = prompt("Please input your name. \n EX: John Doe"); //asks and stores the name of the customer

var subMember = confirm("Hello " + customerName + "." + "\n Are you a subscriber? \n (OK for Yes, Cancel for No.)"); //checks if the user is a subscriber

var member = (subMember) ? "Thank you for being a member!" : "Becoming a member could save you up to 20% on comics!"; //gives value to subMember response

alert(member); //displays result of member variable