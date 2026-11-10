/* function greet(name:string, callback:(msg:string)=>void)
{
  console.log(name)
  callback("Hello")
}

function message(msg:string)
{
  console.log(msg)
}
greet("John",message) */

function DR(result:number)
{
  console.log(result)
}
function sum(a:number, b:number, callback:(result:number)=>void)
{
  let result=a+b;
  callback(result);
}
sum(10,20,DR)