/*
 Ryan McNutt
 0004659907
 Scalable Data Infrastructures
 C201507 Term
 Who Feels Lucky?
 */

//alert("this is to test my connection between my index.html file and my script.js file.") //testing file setup


//global variables (don't use in functions)
var userName = prompt("Welcome to the Florida Lottery,\n Please enter your first name:"); //collects users name


//lotto functions (Name, PowerBall and Normal FL Lotto)
function userCheck(name){ //sets up the function userCheck

    while (name === ""){ //checks that a name was inserted by user
        name = prompt("Insert your first name please:"); //if blank, prompts user for name again

    }

    console.log("Thank you " + name + "."); //displays information in the console for the user

}

//main code (call functions and global variables)
userCheck(userName); //calls the function userCheck
