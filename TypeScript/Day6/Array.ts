let Names: string[]=[]
Names[0]="John"
Names[1]="Prynk"
Names[2]="Dinesh"
Names[3]="Revanth"

console.log(Names)
console.log(Names[1])
console.log(Names[2])

let UserID:Array<number>=[121,123,122]
let UserName:Array<string>=["John","Scott","Bob"]
let Data:Array<String|number>=["Barbie",124,125,"Peter"]
let NewData:Array<any>=[true, null, 154, "ABC"]

console.log("User Name is: ")

for (let i=0;i <UserName.length; i++)
{
  console.log(UserName[i])
}
//for in
console.log("User ID is: ")
for (let index in UserID)
{
  console.log(UserID[index])
}

// for of
console.log("Data is: ")
for (let value of Data)
{
  console.log(value)
}

//passing an array to a function
function Search(a:number, Arr:number[]):boolean
{
  for (let i=0; i<Arr.length; i++)
    if (Arr[i]===a){
      return true
    }
    return false
}
let Arr=[1,2,3,4]
console.log(Search(2,Arr))
console.log(Search(10,Arr))

// passing an array to get an array

function Caps(Arr1:string[]):String[]{
let CapsArr:string[]=[]
for (let i=0;i<Arr1.length; i++){
CapsArr[i]=Arr1[i].toUpperCase();
}
return CapsArr
}
let Arr1:string[]=["My","name","is","priyanka"]
console.log(Caps(Arr1))

/* 
OUTPUT:

[ 'John', 'Prynk', 'Dinesh', 'Revanth' ]
Prynk
Dinesh
User Name is: 
John
Scott
Bob
User ID is: 
121
123
122
Data is: 
Barbie
124
125
Peter
true
false
[ 'MY', 'NAME', 'IS', 'PRIYANKA' ]

*/