// Exercise: 41 "Megicians"
// first we make an array in which we put some values & define the function to print 
// each megician name from array.
let magicians: string[] = ["Saamri", "Subhan", "Herrypotter"];
function show_magicians(magicians: string[]){
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
show_magicians(magicians);