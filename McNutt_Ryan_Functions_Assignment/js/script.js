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

function normLottery(num){ //function for generating 6 random lottery numbers between 1-53
    var pool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,  35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]; //list of possiable numbers
    var normArray = []; //stores values for picked numbers

    for (var n = 0; n < num; n++) { //keeps track of how many numbers are pulled

        var index = Math.floor(Math.random() * pool.length); // picks a random array index
        normArray[n] = pool[index]; // get the number at that index
        pool.splice(index, 1); // remove index location from the pool
    }

    return normArray; //returns picked numbers outside the function

}

function powLottery(num){ //function for generating 5 random lottery numbers between 1-59
    var pool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]; //list of possiable numbers
    var normArray = []; //stores values for picked numbers

    for (var p = 0; p < num; p++) { //keeps track of how many numbers are pulled

        var index = Math.floor(Math.random() * pool.length); //picks a random array index
        normArray[p] = pool[index]; //get the number at that index
        pool.splice(index, 1); //remove index location from the pool
    }

    return normArray; //returns picked numbers outside the function

}

function powerBall(num){ //function for generating a Powerball between 1-35
    var pool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]; //list of possible numbers
    var normArray = []; //stores value for the picked number

    for (var b = 0; b < num; b++){ //keeps track of how many numbers are pulled

        var index = Math.floor(Math.random() * pool.length); //picks a random array index
        normArray[b] = pool[index]; //get the number at that index

    }

    return normArray; //returns picked numbers outside the function

}

//main code (call functions and global variables)

userName = prompt("Welcome to the Florida Lottery,\n Please enter your First Name:"); //collects users name
userName = userCheck(userName); //calls the function userCheck
console.log("Thank you " + userName + "."); //displays information in the console for the user

lottoNorm = confirm("So " + userName + ", are you checking the \n Florida Lottery numbers? \n (OK for Yes, Cancel for No)"); //checks what version of the lotto user would like to display

if (lottoNorm === true) { //sets up an if statement for the type of lottery numbers the user is checking.
    console.log ("Thank you for playing the Florida Lottery " + userName + ", \n Here are the winning numbers."); //outputs a thank you message
    normRandom = normLottery(6); //calls function normLottery with parameters
    console.log (normRandom); //displays function output
}else{

    lottoPower = confirm("So you checking the \n Powerball Lottery Numbers? \n (OK for Yes, Cancel for No)"); //checks what version of the lotto user would like to display
    if (lottoPower === true) { //sets up an if statment for the type of lottery numbers the user is checking
        console.log ("Thank you for playing the Powerball Lottery " + userName + ", \n Here are the winning numbers."); //outputs a thank you message
        powRandom = powLottery(5); //calls function powLottery with parameters
        pBall = powerBall(1); //calls function powerBall
        console.log (powRandom);
        console.log (pBall);
    }else{
        alert("Please refresh the page and try again."); //fail safe alert so user can try again to find numbers
    }
}


