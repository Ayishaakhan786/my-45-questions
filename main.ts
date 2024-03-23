// Exercise 32 "Chacking Usernames."
// Array of current users.
let current_users: string[] = ['Ayisha', 'fatima', 'Sameer', 'Bismah', 'Minahil'];
// Array of new users.
let new_users: string[] = ['Sahar', 'Ayisha', 'Sameer', 'Rida', 'Jannat'];
// loop through new_users to chack for usernames availability.
new_users.forEach(one_new_user =>{
    // Making a condition for Username already exists & save in our_condition variable.
    let our_conditions = current_users.some(one_new_user => one_new_user.toLowerCase() === one_new_user.toLowerCase())
    // print Different Messages by using if-Else statements.
    if(our_conditions){
        console.log(`sorry ${one_new_user} is already taken`);
    }
    else{
        console.log(`This Username ${one_new_user} is available`);
    }
}) 