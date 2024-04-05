// Exercise: 44 "Sandwiches"
// First we define the functions with a rest perameter that accepts items arguements for sandwiches.
function makeSandwich(... items: string[]){
    console.log("\n Making a sandwitch with following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n Now enjoy your sandwich");
}
// Now call our function three times with three different number of arguemenats.
makeSandwich("Cheese", "Ketchup", "Chicken", "salad","egg");
makeSandwich("Bread", "butter", "Raat ka salan");
makeSandwich("Mayo", "Cheese", "chatni", "tomatoo","fried onion", "iceburg");