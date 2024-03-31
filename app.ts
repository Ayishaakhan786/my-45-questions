// Ecercise: 42 "Great Magicians".
// First we Define a function to print each value of array.
let magicians: string[] = ["Saamri", "Subhan", "Herrypotter"];
function show_magicians(magicians: string[]){
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
show_magicians(magicians);

function make_great(magicians: string[]){
    for (let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + " The Great"; 
    }
}
make_great(magicians);
show_magicians(magicians);