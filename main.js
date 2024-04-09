// Exercise 45 "Cars"
// Define a function to create an object named cars with optional options...
function createCars(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize the object with manufacturer & model.
    var cars = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional option to the car object to select the options.
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        cars[key.trim()] = value.trim();
    });
    return cars;
}
// Now, call the function to create an object named cars.
var my_Car = createCars("civic", "Corolla", "color: Black", "sunroof: True", "Year: 2022");
// Print a variable to ensure that all the given information that mentioned above is correct.
console.log(my_Car);
