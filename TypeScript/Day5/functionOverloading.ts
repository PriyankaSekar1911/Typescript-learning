//Different parameter Types(data types)

/* function info(id:number):string
function info(name:string):string
function info(data:number|string):string
{
  if (data==="number")
  {
    return(`User ID is ${data}`)
  }
  else
  {
    return (`User Name is ${data}`)
  }
}
console.log(info("Prynk"))
console.log(info(103))
 */

//Example 2:  Different Number of Parameters

/* function sum(a:number,b:number):number
function sum(a:number,b:number,c:number):number
function sum(a:number,b:number,c?:number):number
{
  if (c!==undefined)
  {
return a+b+c
  }
  return a+b
}
console.log(sum(10,20))
console.log(sum(10,20,30)) */

//Example 3: different return types
/* function data(ID:number):number
function data(Name: string):string
function data(param: string|number):string|number
{
if (typeof param=== "string")
{
  return param.toUpperCase()
}
else (typeof param=== "number")
{
return param*2
}
}
console.log(data("Prynk"))
console.log(data(25)) */

function greet(name:string):string
function greet(age:number):string
function greet(isMarried:boolean):string
function greet(value:string|number|boolean):string
{
if (typeof value==="string")
{
  return (`Hi ${value}`)
}
else if (typeof value==="number")
{
  return (`You are ${value} years old`)
}
else
  {
  let res:string= value?"married":"single"
       return (`You are ${res}`);
}
}
console.log(greet("Prynk"))
console.log(greet(25))
console.log(greet(false))