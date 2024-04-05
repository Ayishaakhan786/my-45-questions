// Exercise: 44 "Sandwiches"
// First we define the functions with a rest perameter that accepts items arguements for sandwiches.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwitch with following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now enjoy your sandwich");
}
// Now call our function three times with three different number of arguemenats.
makeSandwich("Cheese", "Ketchup", "Chicken", "salad", "egg");
makeSandwich("Bread", "butter", "Raat ka salan");
makeSandwich("Mayo", "Cheese", "chatni", "tomatoo", "fried onion", "iceburg");
