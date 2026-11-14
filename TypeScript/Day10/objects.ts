//Object contains Variable/ properties and Methods(Functions)
//4type of object creations


//1.object type
//2.Inline object
//3.Type alias
//4.object with class

//1.Object type

/* let emp1:object={
  name:"John",
  age:34,
  salary:50000

}
console.log(emp1) */

//If we specify object we can't create method within the object
/* let emp1={
  name:"John",
  age:34,
  salary:50000,
  getInfo:function():string  {
    return`${this.name} is ${this.age} years old and earning ${this.salary}`
  }

}
console.log(emp1.name,emp1.age,emp1.salary)
console.log(emp1.getInfo())
console.log("What is the the type of emp1? ",typeof emp1)

console.log(emp1["name"],emp1["age"],emp1["salary"])
console.log(emp1["getInfo"]())


//Modify
emp1.age=28;
console.log("Updated age is ",emp1["age"])

/* 
OUTPUT:
John 34 50000
John is 34 years old and earning 50000
What is the the type of emp1?  object

John 34 50000
John is 34 years old and earning 50000
Updated age is  28

*/


//2.Inline object

/* let book:{
  title:string,
  SN:number,
  rate:number,
  getBook:()=>string
}={
  title:"Learn Java",
  SN:123456,
  rate:500,
  getBook:function(){
    return(`Title of the book is ${this.title} and the rate is ${this.rate}`)
  }
}
console.log(book.getBook())
console.log("Book title: ",book.title, "Book rate: ",book.rate)


let book1:{
  title:string,
  SN:number,
  rate:number,
  getBook:()=>string
}={
  title:"Learn TS",
  SN:123455,
  rate:550,
  getBook:function(){
    return(`Title of the book is ${this.title} and the rate is ${this.rate}`)
  }
}
console.log(book1.getBook())
console.log("Book title: ",book1.title, "Book rate: ",book1.rate) */

/* 

OUTPUT:

 Title of the book is Learn Java and the rate is 500
Book title:  Learn Java Book rate:  500
 Title of the book is Learn TS and the rate is 550
Book title:  Learn TS Book rate:  550

*/

//Inline object with arrow function
/* let book:{
  title:string,
  SN:number,
  rate:number,
  getBook:()=>string
}={
  title:"Learn Java",
  SN:123456,
  rate:500,
  getBook:()=> ""
    }
    book.getBook=()=>{
      return(`Title of the book is ${book.title} and the rate is ${book.rate}`)
    }
console.log(book.getBook())
console.log("Book title: ",book.title, "Book rate: ",book.rate) */

/* 

Title of the book is Learn Java and the rate is 500
Book title:  Learn Java Book rate:  500

*/

//3.Type Alias
/* type product={
  name:string,
  marks:number,
  grade:string,
  getStud:()=> string
}
let stud1:product={
  name:"Peter",
  marks:450,
  grade:"D",
  getStud:function()
   {
    return `${this.name} scored ${this.marks} out of 500 and the grade is ${this.grade}`
  }
}
let stud2:product={
  name:"John",
  marks:490,
  grade:"A",
  getStud:function(){
     return `${this.name} scored ${this.marks} out of 500 and the grade is ${this.grade}`
  }
}

console.log(stud1.getStud())
console.log(stud2.getStud()) */


/* type basic={
  name:string,
  age:number
}
type contact={
  pno:number,
  email:string
}

type customer=  basic &  contact &
{

getCust:()=> string
}

let cust:customer={
  name:"John",
  age:30,
  pno:12313232,
  email:"john@123",
  getCust:function(){
    return`${this.name} can be contacted by ${this.pno} or ${this.email} `
  }

}

console.log(cust.name)
console.log(cust.getCust()) */



/* 
OUTPUT:

Peter scored 450 out of 500 and the grade is D
John scored 490 out of 500 and the grade is A

John
John can be contacted by 12313232 or john@123 

*/

//4.Object creation with  class

class Student{
  fname:string;
  lname:string;
  age:number;
  aid:number;

  constructor(fname:string,lname:string,age:number,aid:number){
    this.fname=fname;
    this.lname=lname
    this.age=age;
    this.aid=aid;
  }
getName(): string{
  return `${this.fname} ${this.lname} `;
}

getDet():string{
   return `${this.getName()} the aid is ${this.aid}`;

}
}

//object creations

let s1= new Student("ABC","DEF",24,34567545)
console.log(s1.getDet())

let s2= new Student("DEF","GHI",28,3067545)
console.log(s2.getDet())

let s3= new Student("GHI","JKL",27,9864546)
console.log(s3.getDet())
/* 

ABC DEF  the aid is 34567545
DEF GHI  the aid is 3067545
GHI JKL  the aid is 9864546

*/