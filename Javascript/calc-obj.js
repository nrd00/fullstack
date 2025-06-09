const calculator = {
    name : "Hasan",
    age : 25,

    add : (a, b) => a + b,  
    sub : (a, b) => a - b,
    mul : (a, b) => a * b,
    div : (a, b) => {
        // if((a && b) === 0){
        //     console.log(`Enter a valid input!`);
        // }
        if(!b == 0){
            return a / b;
        }else{
            return txt = `You can't divide by Zero!`;
        }
    },
    msg : function(){ return txt = `Hello ${this.name}`}
    

}
//Through Bracket Notation
console.log(calculator["name"]);
console.log(calculator["age"]);
console.log(calculator["msg"]());


//Through dot notation
console.log(calculator.add(15, 5));
console.log(calculator.sub(15, 5));
console.log(calculator.mul(15, 5));
console.log(calculator.div(15, 0));
