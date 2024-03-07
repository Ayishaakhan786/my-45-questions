// Exercise 23
let cars : string ='Subaru';
// Test 1: Equality comparison(True)
console.log("is car == 'Subaru'? I predict true.");
console.log(cars == 'Subaru'); // True 
// Test 2: strict equality comparison (True)
console.log("Is car === 'Subaru'? I predict ture.");
console.log(cars === 'Subaru'); // True
// Test 3: Enequality comparison (False)
console.log("is car != 'Subaru'? I predict fasle.");
console.log(cars != 'Subaru'); // False
// Test 4: strict Enequality comparison (False)
console.log("is car !== 'Subaru'? I predict fasle.");
console.log(cars !== 'Subaru'); // False
// Test 5: Less than comparison (False)
console.log("is car < 'Subaru'? I predict fasle.");
console.log(cars < 'Subaru'); // False (lexicographic compariosn)
// Test 6: Greater than comparison (False)
console.log("is car > 'Subaru'? I predict fasle.");
console.log(cars > 'Subaru'); // False (lexicographic compariosn)
// Test 7: Less than or equal comparison (True)
console.log("is car <= 'Subaru'? I predict true.");
console.log(cars <= 'Subaru'); // True
// Test 8: Greater than or equal comparison (True)
console.log("is car >= 'Subaru'? I predict true.");
console.log(cars >= 'Subaru'); // True 
// Test 9: Chacking truthness (True)
console.log("Is car? I predict true.");
console.log(cars); // True (non-empty sting is truthy)
// Test 10:  Chacking Falseness (False)
console.log("Is car? I predict false.");
console.log(!cars); // false (negation of a truthy value)