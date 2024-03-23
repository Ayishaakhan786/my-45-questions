// Exercise 35 "Animals.
// creating an Array to store some pet Animal names.
let pet_Animals: string[] = ['Cat', 'Dog', 'Cow']
// using for-loop.
for(let OnePet of pet_Animals){
    console.log(`A ${OnePet} would make a great pet`)
}
// Print a message outside the for-loop.
console.log("Any of these woulde be make a great pet!");

// Now, for Experiment we print the upper message again inside the for-loop.
for(let OnePet of pet_Animals){
    console.log(`A ${OnePet} would make a great pet`)
    console.log("Any of these woulde be make a great pet!");
}