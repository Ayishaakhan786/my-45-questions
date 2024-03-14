// Exercise 30
let users: string[] = ['saba','sameer','sara','rehman','hubab']
for(let user of users){
    if(user === "admin"){
        console.log("Hello Admin, would you like to see a status report")
    }
else{
    console.log(`Hello ${users},thank you for logging in again`)
}
}