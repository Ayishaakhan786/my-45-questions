// Exercise: 43 "unchanged Magicians."
// Define the function to show magician names.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array.
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magicians_names = ["sameer", "Ayisha", "Erum"];
// call make_great function to modify magician names.
var great_magicians = make_great(magicians_names);
// call show magicians that show modified lis of magicians.
//show_magicians(great_magicians);
// Make a copy of original array thorugh .slice() function.
var copy_magician_names = magicians_names.slice();
// Modify the copied array to include "The Great" with their names.
var copy_great_magicians = make_great(copy_magician_names);
// Now show both arrays(original & copied).
// "ORIGINAL"
show_magicians(great_magicians);
// "COPIED"
show_magicians(copy_magician_names);
