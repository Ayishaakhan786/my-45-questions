// Ecercise: 42 "Great Magicians".
// First we Define a function to print each value of array.
var magicians = ["Saamri", "Subhan", "Herrypotter"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magicians);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great";
    }
}
make_great(magicians);
show_magicians(magicians);
