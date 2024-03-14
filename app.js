// Exercise 30
var users = ['saba', 'sameer', 'sara', 'rehman', 'hubab'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello Admin, would you like to see a status report");
    }
    else {
        console.log("Hello ".concat(users, ",thank you for logging in again"));
    }
}
