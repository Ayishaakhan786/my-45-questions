// Exercise 26
// choose a color for an alien as you did in Exercise 25, & write an if-else chain.
let alien_color: string = "Green";
// If the alien color is "green" then, print a statement that the player just earned 5 points 
// for shooting the alien.
if(alien_color == "Green"){
    console.log("The player just earned only 5 points for shooting the alien.");
}
// If the alien is not "green" then, print a statement that the player just earned 10 points 
// for shooting the alien.
else{
    console.log("The player just earned only 10 pint for shooting the alien.");
}
// write one version of this program that runs if the block & another that runs the else block.
alien_color = "Red";
if(alien_color == "Green"){
    console.log("The player just earned only 5 points for shooting the alien.");
}