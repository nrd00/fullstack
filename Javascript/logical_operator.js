const loggedIn = false;
const access = true;
const membership = false;

if(!loggedIn){
    console.log(`Please log in first.`);
}else{
    console.log(`You have successfully logged in!`);
    if(loggedIn && membership || access){
        console.log(`Welcome to the course dashboard.`);
    }
}