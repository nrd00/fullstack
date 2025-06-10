const cart = [
    { product: "Laptop", price: 500, quantity: 1 },
    { product: "Shirt", price: 100, quantity: 2 },
    { product: "Pen", price: 10, quantity: 5 }
]

/*
(method) Array<{ product: string; price: number; quantity: number; }>.reduce<number>(callbackfn: (previousValue: number, currentValue: {
    product: string;
    price: number;
    quantity: number;
}, currentIndex: number, array: {
    product: string;
    price: number;
    quantity: number;
}[]) => number, initialValue: number): number (+2 overloads)
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.


*/
const subTotal = cart.reduce((acc, cv) => acc + cv.price, 0);
const totalPrice = cart.reduce((previousValue, currentValue) => previousValue + (currentValue.price * currentValue.quantity), 0)

console.log(`Without quantity, The total price is : ${subTotal}`);
console.log(`With quantity, The total price is : ${totalPrice}`);

// const priceArray = cart.map(product => product.price );
// const maxPrice = Math.max(...priceArray);
// const maxPrice = cart.reduce((max, item) => {
//     return item.price > max.price ? item : max;
// });

// console.log(maxPrice);

const maxPrice = cart.reduce((max, item) => item.price > max.price ? item : max);
console.log('Most Expensive product : ', maxPrice); 
// console.log(`Most Expensive product : ${maxPrice}`);  that's won't work. cz `` tries to convert variable into string. But it was an object. So it fails



const displayCarts = cart.map(items => {
   return items
});

console.log('All Cart items :',displayCarts);



