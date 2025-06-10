const array = [1,3,7, 10, 15, 25, 50];


const square = array.map(num => num ** 2);
console.log(square);
/*
filter(predicate: (value: number, index: number, array: number[]) => value is number, thisArg?: any): number[]
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.


Returns the elements of an array that meet the condition specified in a callback function.
*/

const filtered = array.filter( num => num > 10)

console.log(filtered);

const sum = array.reduce((acc, cv)=> acc + cv, 0);
console.log(sum);


/*
reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number

*/