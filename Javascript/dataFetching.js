

// Retrive comments from a single id

( async()=> {
    const data = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    const users = await data.json();
    console.log(users);
    
})();

// Retrive single user
(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(user => console.log(user))

})()