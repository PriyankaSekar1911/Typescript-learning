// Syntax: function functionName(parameters):returntype{}
/* //No return type and no parameter
function Greet(a:string):void
console.log("Welcome")
 */
/* //Return type and with Parameters
function Add(a:number, b:number):number
{
  return a+b
}
console.log(Add(4,5)) */

//Rest parameters
/* 
function Addnum(...nums:number[]):number
{
  let i;
  let sum=0;
  for (i=0; i<nums.length;i++){
  sum+=nums[i];}
return sum
}
console.log(Addnum(10,40))
console.log(Addnum(10,30,50,34,56)) */
//Rest parameters with Multiple types
/* function getElement(...a:(number|string)[]):number
{
  return a.length;
}
console.log(getElement(1,5,8))
console.log(getElement("Prynk",5,20,"DK")) */
//Optional parameters
/* function ID(name:string, age:number, mail?:string):void{
  console.log("Name is ",name);
  console.log("Age is ",age);
  if(mail !==undefined)
  {console.log("Mail ID is",mail);  
  }
  
}
console.log (ID("Prynk", 25))
console.log (ID("Rev", 23,"rev@123")) */
//Default parameters
function RealDiscount(MRP:number, Rate=.5):number
{
  let Final:number= MRP*Rate;
  return Final
}
console.log(RealDiscount(1000))
console.log(RealDiscount(1000,.3))
