/* Arithmetic
Assignment
Incremental
comparision
Logical
ternary */


let a:number=20, b:number=30, c:number=50
//Arithmentic
console.log(`********Arithmentic********`)
console.log(a+b)//add
console.log(c-b)//subract
console.log(a*b) //multiply
console.log(c/b) // divide and give the quotient
console.log(c%b) // divide and give the reminder
console.log(a**b) // Squareroot


// Assignment
console.log(`********Assignment********`)
console.log(a+=b)// 50 20+30
console.log(a-=b)//30
console.log(a*=b)//600
console.log(a/=b)//20
console.log(a%=b)//20

//Incremental
console.log(`********Incremental********`)
console.log(a++)
console.log(++a)
console.log(b--)
console.log(--b)

//Comparision
console.log(`********comparision********`)
console.log(a>b)
console.log(a>=b)
console.log(a<b)
console.log(a<=b)
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
//Logical
console.log(`********Logical********`)
console.log(a!=b && a<=b)
console.log(a!=b || a<=b)
console.log !(a<=b)
//Ternary
console.log(`********Ternary********`)
//comparision? true:false
let result = a>=b ? `A is greater than B` : `A is lesser than B`
console.log(result)