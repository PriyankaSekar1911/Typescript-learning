/* //Example 1: Tuple with two values
let profile:[string,number]
profile=["name",123]
console.log(profile)
console.log(profile[1]) 
//Example 2: Tuple with multiple values
let data:[string,number,boolean,string, null]=["AAA",123,true,"BBB",null]
console.log(data[2])
console.log(data)  */
// Example 3: Iterating over a tuple using a traditional for loop
let datta:number[]
datta=[10,12,24,34,45]
/* for(let i=0; i<datta.length; i++)
{
  console.log(datta[i])
}

//Example 4: Iterating using a 'for...in' loop (index-based iteration)
for (let index in datta){
  console.log(datta[index])
} */
//Example 5: Iterating using a 'for...of' loop (value-based iteration)
/* for (let value of datta){
  console.log(value)
} */
// Example 6: Tuple Array (Array of Tuples)
let student:[number,string][]=[
  [101,"john"],
  [102,"Peter"],
  [103,"Mary"]
]

console.log(student)
console.log(student[1])
console.log(student[0])