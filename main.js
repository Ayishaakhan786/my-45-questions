// Exercise 32 "Chacking Usernames."
// Array of current users.
var current_users = ['Ayisha', 'fatima', 'Sameer', 'Bismah', 'Minahil'];
// Array of new users.
var new_users = ['Sahar', 'Ayisha', 'Sameer', 'Rida', 'Jannat'];
// loop through new_users to chack for usernames availability.
new_users.forEach(function (one_new_user) {
    // Making a condition for Username already exists & save in our_condition variable.
    var our_conditions = current_users.some(function (one_new_user) { return one_new_user.toLowerCase() === one_new_user.toLowerCase(); });
    // print Different Messages by using if-Else statements.
    if (our_conditions) {
        console.log("sorry ".concat(one_new_user, " is already taken"));
    }
    else {
        console.log("This Username ".concat(one_new_user, " is available"));
    }
});
