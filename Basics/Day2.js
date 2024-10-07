//Variables and Tables

let firstName= "krishna"
let lastName= "Ningaraddi"
var a=10;

console.log(firstName,lastName,a);


/*

Difference b/w var and let is there scope

-- if a variable is declared as var then can be accessed everywhere
-- if a variable is declared as let then it can be accessed in 
    that scope

    For Example-->

*/


// Here var variable can be accessed both inside and outside the braces

{
    var a=10;
    console.log("inside "+a);
    
}

console.log("outside "+a);

// Here Let variables can't be accessed outside the braces
// As the let variables are not accessable the new value will not 
// overide the old one


{
    let b=20;
    console.log("inside "+b);
    
}

b= 30;

console.log("outside "+b);

/* here the value of b inside the braces is not changed as its scope 
 is from starting of the braces to end of braces */



/* Constants -- here const is used to define the variable whoes value will not change
throughout the program. the variable declared as const can't be overidden

for Example */

{

    const d=10;

    console.log("inside "+ d);
    

}

/*

scope of const is same as let if declared in braces then it will be
start to end of braces

if declared globally then can be accessed every where */

const w=12345;

{
console.log("inside constant"+ w);
    
}

console.log("outside constant"+ w);

// Note Alert will not working Node.js as usual


// Data Types

let Name="krishna" // String
let age= 24 // Number range is 2^53
let result= true //boolean

//null is a standalone value which means empty type of the null will be object

// undefined means value not assigned yet and type of undefined is undefined

// symbol  when we need to store something unquie is symbol

console.log(typeof Name);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 0);









 
