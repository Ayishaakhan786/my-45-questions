// Exercise 25 "Animals.
// creating an Array to store some pet Animal names.
var pet_Animals = ['Cat', 'Dog', 'Cow'];
// using for-loop.
for (var _i = 0, pet_Animals_1 = pet_Animals; _i < pet_Animals_1.length; _i++) {
    var OnePet = pet_Animals_1[_i];
    console.log("A ".concat(OnePet, " would make a great pet"));
}
// Print a message outside the for-loop.
console.log("Any of these woulde be make a great pet!");
// Now, for Experiment we print the upper message again inside the for-loop.
for (var _a = 0, pet_Animals_2 = pet_Animals; _a < pet_Animals_2.length; _a++) {
    var OnePet = pet_Animals_2[_a];
    console.log("A ".concat(OnePet, " would make a great pet"));
    console.log("Any of these woulde be make a great pet!");
}
