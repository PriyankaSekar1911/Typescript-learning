let number:number[]=[1,2,3,4,5,6]
let Fruits:string[]=["Apple","Banana","Cucumber","PineApple"]
//length

console.log("Array Number is ",number)
console.log("Array Fruits is ",Fruits)
console.log("Length of Number array is ",number.length)
console.log("Length of Number array is ",number.length)

//push() add element in the last
Fruits.push("papaya")
console.log("After push: ",Fruits)

//Pop()
Fruits.pop()
console.log("After pop: ", Fruits)

//shift() will add  element in the begginning

Fruits.shift()
console.log("After Shift: ",Fruits)

//unshift()
Fruits.unshift("Orange","Guava")
console.log("After Unshift: ",Fruits)

//concat() Adding one or more array of same type
let concatFr=Fruits.concat(["Pear","Mosambi"],["Watermelon"])
console.log("After Concat : ",concatFr)

//slice() it take out the details and won't affect the existing array
let slicedElement:string[]=Fruits.slice(1,5)
console.log("Sliced Element : ",slicedElement)

console.log("After Slice: ",Fruits)

//splice() it will remove and add the values in an array

let RemovedValue:string[]=Fruits.splice(1,3)
console.log("Value Removed after splice: ", RemovedValue)
console.log("Array value Removed after splice: ",Fruits)

let AddedValue:string[]=Fruits.splice(2,0,"Mango")
console.log("Array Value Added after splice: ",Fruits)

let AddAndRemovedValue:string[]=Fruits.splice(0,2,"Stawberry","Grape","Kiwi")
console.log("Array added and removed value Removed after splice: ",Fruits)


//indexOf()
let KiwiIndex=Fruits.indexOf("Kiwi")
console.log(KiwiIndex)
//includes()

let IsAppleExist:boolean=Fruits.includes("Apple")
console.log(IsAppleExist)
//toString change the value to string instead of array

let StringArray:string=Fruits.toString()
console.log(StringArray)
