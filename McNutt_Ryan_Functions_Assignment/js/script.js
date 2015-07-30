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
var normRandom; //sets a var normRandom
var powRandom; //sets a var powRandom
var pBall; //sets a var pBall


//lotto functions (Name, Powerball, and Normal FL Lotto)

function userCheck(name){ //sets up the function userCheck

    while (name === "" || name === null){ //checks that a name was inserted by user
        name = prompt("Section blank, Enter your First Name please:"); //if blank, prompts user for name again

    }

    return name; //returns the information for name outside of the function

}

function normLottery(min, max, num){ //function for generating 6 random lottery numbers between 1-53
    var normArray = [];
    for (var n = 0; n < num; n++) {
        var randomNum = Math.random() * (max - min) + min;
        normArray[n] = Math.round(randomNum);
    }
    return normArray;

}

function powLottery(min, max, num){ //function for generating 5 random lottery numbers between 1-59
    var normArray = [];
    for (var p = 0; p < num; p++) {
        var randomNum = Math.random() * (max - min) + min;
        normArray[p] = Math.round(randomNum);
    }
    return normArray;

}

function powerBall(min, max, num){ //function for generating a Powerball between 1-35
    var normArray = [];
    for (var b = 0; b < num; b++) {
        var randomNum = Math.random() * (max - min) + min;
        normArray[b] = Math.round(randomNum);
    }
    return normArray;

}

//main code (call functions and global variables)

userName = prompt("Welcome to the Florida Lottery,\n Please enter your First Name:"); //collects users name
userName = userCheck(userName); //calls the function userCheck
console.log("Thank you " + userName + "."); //displays information in the console for the user

lottoNorm = confirm("So " + userName + ", are you checking the \n Florida Lottery numbers? \n (OK for Yes, Cancel for No)"); //checks what version of the lotto user would like to display

if (lottoNorm === true) { //sets up an if statement for the type of lottery numbers the user is checking.
    console.log ("Thank you for playing the Florida Lottery " + userName + ", \n Here are the winning numbers."); //outputs a thank you message
    normRandom = normLottery(1, 53, 6); //calls function normLottery with parameters
    console.log (normRandom); //displays function output
}else{

    lottoPower = confirm("So you checking the \n Powerball Lottery Numbers? \n (OK for Yes, Cancel for No)"); //checks what version of the lotto user would like to display
    if (lottoPower === true) { //sets up an if statment for the type of lottery numbers the user is checking
        console.log ("Thank you for playing the Powerball Lottery " + userName + ", \n Here are the winning numbers."); //outputs a thank you message
        powRandom = powLottery(1, 59, 5); //calls function powLottery with parameters
        pBall = powerBall(1, 35, 1); //calls function powerBall
        console.log (powRandom);
        console.log (pBall);
    }else{
        alert("Please refresh the page and try again."); //fail safe alert so user can try again to find numbers
    }
}


