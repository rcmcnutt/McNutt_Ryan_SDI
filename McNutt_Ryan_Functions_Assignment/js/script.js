/*
 Ryan McNutt
 0004659907
 Scalable Data Infrastructures
 C201507 Term
 Who Feels Lucky?
 */

//alert("this is to test my connection between my index.html file and my script.js file.") //testing file setup


//global variables (don't use in functions)
"use strict";
var userName; //sets a var userName
var lottoNorm; //sets a var lottoNorm
var lottoPower; //sets a var lottoPower


//lotto functions (Name, PowerBall and Normal FL Lotto)
function userCheck(name){ //sets up the function userCheck

    while (name === "" || name === null){ //checks that a name was inserted by user //**look into why it generates null as a name**
        name = prompt("Section blank, Enter your First Name please:"); //if blank, prompts user for name again

    }

    console.log("Thank you " + name + "."); //displays information in the console for the user

}

function normLottery(){

}

function powLottery(){

}

//main code (call functions and global variables)
userName = prompt("Welcome to the Florida Lottery,\n Please enter your First Name:"); //collects users name
userCheck(userName); //calls the function userCheck

lottoNorm = confirm("So " + userName + ", are you checking the \n Florida Lottery numbers? \n (OK for Yes, Cancel for No)"); //checks what version of the lotto user would like to display

if (lottoNorm === true) { //sets up an if statement for the type of lottery numbers the user is checking.
    console.log ("Thank you for playing the Florida Lottery " + userName + ", \n Here are the winning numbers."); //outputs a thank you message

}else{

    lottoPower = confirm("So you checking the \n Powerball Lottery Numbers? \n (OK for Yes, Cancel for No)");
    if (lottoPower === true) {
        console.log ("Thank you for playing the PowerBall Lottery " + userName + ", \n Here are the winning numbers.");
    }else{
        alert("Please refresh the page and try again.");
    }
}


