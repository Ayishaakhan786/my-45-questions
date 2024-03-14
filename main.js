// Exercise 28 "Stages of life."
var age = 18;
// if the age is less than 2 then print a message that the person is a baby.
if (age < 2) {
    console.log("The Person is a baby.");
}
// if the age is at least 2 years old but less than 4 then print message that the person is a toddler.
else if (age < 2 && age < 4) {
    console.log("The Person is a toddler.");
}
// if the age is at least 4 years old but less than 13 then print message that the person is a kid.
else if (age < 4 && age < 13) {
    console.log("The Person is a kid.");
}
// if the age is at least 13 years old but less than 20 then print message that the person is a teenager.
else if (age < 13 && age < 20) {
    console.log("The Person is a teenager.");
}
// if the age is at least 20 years old but less than 65 then print message that the person is a adult.
else if (age < 20 && age < 65) {
    console.log("The Person is a adult.");
}
// if the age is at least 65 year or older than print a message that the person is an alder.
else {
    console.log("Person is an alder");
}
