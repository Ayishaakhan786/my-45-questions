// Exercise 24
let car : string = 'Cultus';
let age : number = 18; 
let number : number [] = [1 ,3 , 7 , 8 , 25];
// String Test 
// Test 1: Equality (True)
console.log("Is car == 'Cultus'? I predict True.");
console.log(car == 'Cultus'); // True (case insensitive)
// Test 2: Strict Equality (False)
console.log("Is car === 'Cultus'? I predict False.");
console.log(car === 'Cultus'); // False (case sensitive)
// Test 3: Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); // True 
// Test 4: Inequality (False)
console.log("Is car !== 'Cultus'? I predict False.");
console.log(car !== 'Cultus'); // False (case sensitive)
// Test 5: Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'Cultus'? I predict True.");
console.log(car.toLocaleLowerCase() =='Cultus'); // True (converted to lowercase)
// Test 6: Lowercase conversion (False)
console.log("Is car.toLowerCase() == 'Cultus'? I predict false.");
console.log(car.toLocaleLowerCase()); // false (original value remain uppercase)
//  *Numerical Test*
// Test 7: Equality (True)
console.log("Is age == 18? i predict true.");
console.log(age == 18); // True 
// Test 8: Inequality (False)
console.log("Is age != 27? i predict false.");
console.log(age != 27); // false 
// Test 9: Greater than (False)
console.log("Is age > 27? i predict false.");
console.log(age > 27); // false 
// Test 10: Less than or equal (True)
console.log("Is age <= 18? i predict true.");
console.log(age <= 18); // True 
// *Logical Operator*
// Test 11: AND Operator (true)
console.log("Is age > 15 && age < 30? I predict true.");
console.log(age > 15 && age < 30 ); // True (both conditions match)
// Test 12: OR (False)
console.log("Is age > 40 || age < 30? I predict false.");
console.log(age > 40 || age < 30 ); // False (neither conditions match)
//*Array Test*
// Test 13: In array (True)
console.log("Is 3 in Number? I predict True");
console.log(3 in number); // checks for index existance
// Test 14: Not In array (False)
console.log("Is 45 not in number? I predict True");
console.log(45 not in number); // Ture (negation of "in" operator)