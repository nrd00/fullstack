const array = [];
let n = 30;

for(let i = 1; i <= n; i++){
    array.push(i);
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if((element % 2) != 0) continue;  //Skipping up the odd numbers
    console.log(element);             //Printing out even numbers
    if(element === (n/2)) break;      //Break the loops in half of n for even
    
}