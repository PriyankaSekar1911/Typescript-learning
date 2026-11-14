// Syntax: (parameters)=>:returntype{}
//No return type and no parameter
let greet=():void=>
console.log("Welcome")
greet()


//Return type and with Parameters
let Add=(a:number, b:number):number=>
{
  return a+b
}
console.log(Add(4,5))


//Rest parameters

let Addnum=(...nums:number[]):number=>
{
  let i;
  let sum=0;
  for (i=0; i<nums.length;i++){
  sum+=nums[i];}
return sum
}
console.log(Addnum(10,40))
console.log(Addnum(10,30,50,34,56))


//Rest parameters with Multiple types
let getElement=(...a:(number|string)[]):number=>
{
  return a.length;
}
console.log(getElement(1,5,8))
console.log(getElement("Prynk",5,20,"DK"))


//Optional parameters
let ID=(name:string, age:number, mail?:string):void=>
  {
  console.log("Name is ",name);
  console.log("Age is ",age);
  if(mail !==undefined)
  {console.log("Mail ID is",mail);  
  }
  
}
console.log (ID("Prynk", 25))
console.log (ID("Rev", 23,"rev@123"))


//Default parameters
let RealDiscount=(MRP:number, Rate=.5):number=>
{
  let Final:number= MRP*Rate;
  return Final
}
console.log(RealDiscount(1000))
console.log(RealDiscount(1000,.3))


/* 

OUTPUT:

Welcome
9
50
180
3
4
Name is  Prynk
Age is  25
undefined
Name is  Rev
Age is  23
Mail ID is rev@123
undefined
500
300
*/