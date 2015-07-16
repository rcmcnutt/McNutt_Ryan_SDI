//Ryan McNutt
//0004659907
//Scalable Data Infrastructures
//C201507 Term
//Time to play D&D

var creatureEncounter = ["Goblin", "Skeleton", "Troll", "Spider"]; //list of possible creature encounter
var initiativeRoll = [7, 17, 13, 15]; //initiative rolls for each creature
var attack = prompt("Pick a number 0 - 3"); //used to show what creature is attacking the player

alert("You've been attacked by a " + creatureEncounter[attack] + " roll 1d20 for initiative!"); //shows the player what is attacking them.

var myRoll = prompt("Please input your die roll."); //place for player to insert their die roll
var myToHitRoll = Number(myRoll) + 3; //the roll + your to hit modifier

alert("The " + creatureEncounter[attack] + " rolls a " + initiativeRoll[attack] + ", you rolled a " + myToHitRoll + "."); //displays initiative to the player

console.log(attack);


