// Exercise 37 "large shirts"
// making a function.
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("creating a ".concat(size, " with the ").concat(printMessage, " printed on the shirt"));
}
// Now calling a function with by default values.
make_shirt();
// now we just change the size of the shirt but the message remains same.
make_shirt("Meduim");
// Now we change the message but the is same or any. (small)
make_shirt("small", "I Love HTML & Javascript");
