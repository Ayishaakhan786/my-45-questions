// Exercise: 38 "Cities".
// First we describe a funtion.
function describe_city(city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}
// Now calling a function.
describe_city("Karachi");
// Now change the city name.
describe_city("Lahore");
// Now we both values the city and the country also.
describe_city("Chicago", "America");