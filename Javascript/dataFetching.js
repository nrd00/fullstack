

// Retrive comments from a single id

( async()=> {
    const data = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    const users = await data.json();
    console.log(users);
    
})();

// Retrive single user
//N.B. fetch doesn't give path, or not found type error. It just send 1. DNS server error, 2. No internet Error 3. CORS rejection etc.
(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(user => console.log(user))
    .catch(error => console.error(error.message))

})()