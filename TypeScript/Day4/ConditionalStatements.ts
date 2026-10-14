// Example1 : If age is greater than or equal to 18, the message "You are eligible to vote." will be printed.
/* let Age:number=20
if(Age>18)
  console.log("You are eligible to vote.") */

//Example 2:  Print number is even is odd
/* 
let Num:number=15
if (Num%2==0)
{
  console.log(`${Num} is even`)
}
else
{
  console.log(`${Num} is odd`)
 } */


//Example3: Depending on the marks, display appropriate grade.
/* 
let Mark:number=35
if (Mark>85 && Mark<=100)
{
  console.log(`${Mark} is the scored Mark and the Grade is A`)
}
else if (Mark>70 && Mark<=85)
{
  console.log(`${Mark}  is the scored Mark and the Grade is B`)
}
else if (Mark>55 && Mark<=70)
{
  console.log(`${Mark}  is the scored Mark and the Grade is C`)
}
else if (Mark>40 && Mark<=55)
{
  console.log(`${Mark}  is the scored Mark and the Grade is D`)
}
else
{
  console.log(`${Mark}  is the scored Mark and is failed`)
}
 */


//switch-case Statement
//Example 5 : Depending on the value of day, print the corresponding day of the week.
/* let Day:number=2
switch(Day){
case 1:
  console.log("Monday")
  break;
case 2:
  console.log("Tuesday")
  break;
case 3:
  console.log("Wednesday")
  break;
case 4:
  console.log("Thursday")
  break;
case 5:
  console.log("Friday")
  break;
case 6:
  console.log("Saturday")
  break;
case 7:
  console.log("Sunday")
  break;
default:
  console.log("Invalid day")
} */


  let x:number=20, y:number=30
  switch(x-y)
 { 
  case 10:
    console.log("The answer is 10");
    break;
  case 5:
    console.log("The answer is 5");
    break;
  case 0:
    console.log("The answer is 0");
    break;
  default:
    console.log("The result is something else")

 }