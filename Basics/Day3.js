// Data Types and conversion




let a=10;
let b=20;
let c='a';
let d="Krishna"
let e=true;

console.log("type of a is "+ typeof a);
console.log("type of b is "+ typeof b);
console.log("type of c is "+ typeof c);
console.log("type of d is "+ typeof d);
console.log("type of e is "+ typeof e);

let num=123456;

let numToString=String(num) // here String class is used to convert the Number to the string

console.log(numToString);
console.log(typeof numToString);

let string="krishna"  // Here the string contains aplhabets which can't be converted into number

let stringToNum= Number(string)

console.log(stringToNum);
console.log(stringToNum);


let string1="123456"
let stringToNum1= Number(string1)

console.log(stringToNum1);
console.log(typeof(stringToNum1));


let bool= true;

console.log(typeof bool);

let bool1="true"; //anything inside the double quote will be considered as true in boolean convertion

console.log(bool1);
console.log(typeof bool1);

let stringToBool= Boolean(bool1);

console.log(stringToBool);

let bool2="";

console.log(bool2);

console.log(typeof bool2);

console.log(Boolean(bool2));



// Operations

console.log(1+2); //sum
console.log(1-2); // Diff
console.log(1*2); // Product
console.log(1/2); // quotient
console.log(1%2); // modulus
console.log(1**2); // power

let a=10
let b= 12+2+"2";

/* execution happens from left to right and top to bottom 
here first the addition happen later the concatination happens */

console.log(b);

console.log(typeof b);

let sum= Number("2")+2+"2";

console.log(sum);

console.log(typeof sum);







