const users = [
  {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    isActive: true
  },
  {
    name: "Bob",
    age: 32,
    email: "bob@example.com",
    isActive: false
  },
  {
    name: "Charlie",
    age: 29,
    email: "charlie@example.com",
    isActive: true
  },
  {
    name: "Diana",
    age: 22,
    email: "diana@example.com",
    isActive: false
  },
  {
    name: "Ethan",
    age: 35,
    email: "ethan@example.com",
    isActive: true
  }
];

const activeOadult = users.filter(user => user.isActive && user.age > 25)
console.log(activeOadult);

const usersEmail = users.map(user => user?.email);
console.log(usersEmail);

