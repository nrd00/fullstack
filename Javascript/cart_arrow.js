const cart = [
    {name : "Laptop", price: 1000},
    {name : "Phone", price: 500},
]
//Using spread operator
const addProduct = (product, price = 0) => [...cart, {name: product, price: price}];

const updateCart = addProduct("Keyboard", 250);
console.log(updateCart);

//Using rest oprator
const totalPrice = (...prices) => prices.reduce((pv, cv)=>pv + cv, 0);
const showPrice = totalPrice(1000, 500, 250);
console.log(`The total cart price is : $${showPrice}`);

//Using object destucturing
const displayProduct = ({product, price}) => `Name : ${product}, Price: $${price}`


const showProduct = displayProduct({product : "Mouse", price : 50});
console.log(showProduct);
