/* Java Script- Dynamically typed lang
Type script - statically defined  lang

Data types:

Primitive-
1.Number
2. String
3. Boolean
4.Null
5. undefine
6. Any
7.union
8.void
*/

/* //1.Number
let num:number=10
console.log(num) 
console.log(typeof num) */

/* //2. String
let city1:string= "Banglore", city2:string ='Trichy'
console.log("I'm Priyanka and I stay in", city1, "I'm from",city2)
let info:String=`I'm in ${city1} right now, I was in ${city2} last week`
console.log(info)
console.log(typeof(city1)) */

/* //Boolean
let IsStudent:Boolean=true, HasJob:Boolean=false
console.log(`IsStudent: ${IsStudent}`)
console.log(`HasJob: ${HasJob}`) */
/* 
//null, undefined
let emptyvalue:null=null
let NotAssigned: undefined = undefined
console.log(emptyvalue)
console.log(NotAssigned)
console.log(typeof(emptyvalue))//object
 */

/* //any- It will  lose the typesript value- needs to be more cautious on this

let value:any=30
console.log(value)
console.log(typeof(value))

value="Priyanka"
console.log(value)
console.log(typeof(value))

value= true
console.log(value)
console.log(typeof(value))


 */

/* //Union
let id: number| string | boolean

id="ABCD"
console.log(id)
console.log(typeof(id))

id= 12344
console.log(id)
console.log(typeof(id))

id= true
console.log(id)
console.log(typeof(id))

 */
/* 
//Void
function Start()
{
  console.log("Welcome to Typescript")
}
Start()

function Start1():void
{
  console.log("I'm learning Typescript")
}
Start1() */

//Funtion
function sum(x:number, y:number):number
{
  return(x+y)
}
let res:number=sum(10,20)
console.log(res)
