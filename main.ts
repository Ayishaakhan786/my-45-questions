// Exercise 45 "Cars"
// Define a function to create an object named cars with optional options...
function createCars(manufacturer , model , ...options){
    // Initialize the object with manufacturer & model.
    let cars = {
        manufacturer: manufacturer ,
        model: model
    };
    // Add additional option to the car object to select the options.
    options.forEach(option => {
        let [key , value] = option.split(":");
        cars[key.trim()] = value.trim();
    });
    return cars ;
}
// Now, call the function to create an object named cars.
let my_Car = createCars("civic", "Corolla", "color: Black", "sunroof: True", "Year: 2022");
// Print a variable to ensure that all the given information that mentioned above is correct.
console.log(my_Car);