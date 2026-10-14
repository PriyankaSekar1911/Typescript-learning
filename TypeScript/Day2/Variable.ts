/* let, const., var are the variables
 1. Scope
 2. Declaration/value assigning
 3. redeclaration
 4.re-initialization
 5. Hoisitng
  */

 //1. Scope- two types- functional scope, block scope
 //Functional Scope
/*  function test(){
  if (true){
    var x= 20;
    
  }
  console.log(x);
 }
test() */

// Block scope
/*  function test(){
  if (true){
    let x= 20;
    const name ="Priyanka";
    console.log(x); // It will give output
    console.log(name);
    
  }
  console.log(x);
  console.log(name);//Thesewill throw
 }
test() */

//2. Declaration
/* let A;// declaration
A=55// Initialization
var B;// let and var we can declare the variable and initialize later
const c;//Its showing CTE - Compile time error
 */

//3. Re-declaration
/* var x= 4;
var x=20;
let y=30;//CTE- we can't declare let & const variable more than once
let y=35;
const z=20;
const z=25 */


//4.Reinitialization
/* 
let a=45;
a=35;
console.log(a)  // we can change the value for let and var but not to const
var b= 20;
var b= 25
console.log(b)

const c =30
c=09
console.log(c) // once we assign value to const we can't change it
 */

// Hoisiting
//we can call the variable before declaration
/* console.log (x)// undefined output we willl get
var x= 20;
console.log (x)

console.log(y)
let y=45;
console.log(y)//RTE- Runtime error

console.log(z)
const z=35;
console.log(z) */

