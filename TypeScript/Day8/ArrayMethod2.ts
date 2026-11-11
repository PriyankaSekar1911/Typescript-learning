// =========  forEach(), map(), filter(), reduce(), some(), every() =========
let Fruits:string[]=["Apple","Orange","Mango","Kiwi"]
Fruits.forEach(function(element,index)
{
console.log(index, element)
})
//For Each to get the values
Fruits.forEach((element)=>{
  console.log(element.toUpperCase())
})



//Map()
// Ex1: Req: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]

let Num:number[]=[1,2,3,4,5,6,7,8,9,10]
let SquaredNum= Num.map((num)=>{
   return num*num
})
console.log("Squared value is",SquaredNum)

let Double= Num.map((num)=>num*2)
console.log("Double value is ",Double)

// Syntax: array.filter(function(currentValue, index, array){})
//Even numbers
let Even=Num.filter((num)=>num%2==0)
console.log("Even num ",Even)

// Ex2: Get the only numbers greater than 3 from an array
let GreaterThanThree = Num.filter((num)=>num>3)
console.log("Number Greater than 3",GreaterThanThree)



//4. reduce() - Applies a function on every element of an array and returns a single value.
let SumNum=Num.reduce((num,element)=> num+element)
console.log("Sum using reduce method ",SumNum)

let SumNum2=Num.reduce((num,element)=> num+element,5)// 5 is for the default value we can use
console.log("Sum using reduce method and with default value ",SumNum2)



//5. Some()
let hasNeg=Num.some((element)=>element<=0)
console.log("Does the Num array contain negative values?: ",hasNeg)

let hasPos=Num.some((element)=>element>=0)
console.log("Does the Num array contain negative values?: ",hasPos)



//6.every()
let hasEven=Num.every((element)=>element%2==0)
console.log("Does the Num array contain negative values?: ",hasEven)

let hasGreaterThanFive=Num.every((element)=>element>=5)
console.log("Does the Num array contain negative values?: ",hasGreaterThanFive)

let hasPosi=Num.every((element)=>element>=0)
console.log("Does the Num array contain negative values usine every?: ",hasPosi)

/* 

OUTPUT:

0 Apple
1 Orange
2 Mango
3 Kiwi
APPLE
ORANGE
MANGO
KIWI
Squared value is [
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]
Double value is  [
   2,  4,  6,  8, 10,
  12, 14, 16, 18, 20
]
Even num  [ 2, 4, 6, 8, 10 ]
Number Greater than 3 [
  4, 5,  6, 7,
  8, 9, 10
]
Sum using reduce method  55
Sum using reduce method and with default value  60
Does the Num array contain negative values?:  false
Does the Num array contain negative values?:  true
Does the Num array contain negative values?:  false
Does the Num array contain negative values?:  false
Does the Num array contain negative values usine every?:  true
 */