/*
 Ryan McNutt
 0004659907
 Scalable Data Infrastructures
 C201507 Term
 Who Feels Lucky?
 */

//alert("this is to test my connection between my index.html file and my script.js file.") //testing file setup

var userName = prompt("Welcome to the Florida Lottery,\n Please enter your first name:"); //collects users name

function userCheck(name){ //sets up the function userCheck

    var leftBlank=1; //keeps count of the times the name section is left blank
    while (name === ""){ //checks that a name was inserted by user
        name = prompt("Insert your first name please:"); //if blank, prompts user for name again
        leftBlank++;

        if (leftBlank === 5){ //if statement that checks to see how many times name is left blank.
            console.log ("Please refresh the page and try again."); //message displays if name is left blank 5 times
            break; //stops loop from running
        }
    }

    console.log("Thanks for stopping by " + name + "."); //displays information in the console for the user
}
userCheck(userName); //calls the function userCheck