// Exercise: 38 "Cities".
// First we describe a funtion.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// Now calling a function.
describe_city("Karachi");
// Now change the city name.
describe_city("Lahore");
// Now we both values the city and the country also.
describe_city("Chicago", "America");
