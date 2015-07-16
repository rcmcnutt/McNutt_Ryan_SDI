//Ryan McNutt
//0004659907
//Scalable Data Infrastructures
//C201507 Term
//Time to play D&D

var creatureEncounter = ["Goblin", "Skeleton", "Troll", "Spider"]; //list of possible creature encounter
var initiativeRoll = [7, 17, 13, 15]; //initiative rolls for each creature
var armorClassRoll = [15, 15, 16, 14]; //armor class for each creature
var attack = prompt("Pick a number 0 - 3"); //used to show what creature is attacking the player

alert("You've been attacked by a " + creatureEncounter[attack] + " roll 1d20 for initiative!"); //shows the player what is attacking them.

var myRoll = prompt("Please input your die roll."); //place for player to insert their die roll
var myInitiativeRoll = Number(myRoll) + 3; //the roll + your the player's "initiative roll" modifier

alert("The " + creatureEncounter[attack] + " rolls a " + initiativeRoll[attack] + ", you rolled a " + myInitiativeRoll + "."); //displays initiative to the player

var attackRoll = prompt("Roll 1d20 to see if you hit the " + creatureEncounter[attack] + "."); //stores the players attack roll
var myAttack = Number(attackRoll) + 4; //adds the attack roll and the player's "to hit" modifier

alert("Your attack roll is " + myAttack + "." + " The " + creatureEncounter[attack] + "'s armor class is " + armorClassRoll[attack] + "."); //displays the players attack roll vs the creatures armor class

//console.log(attack);


