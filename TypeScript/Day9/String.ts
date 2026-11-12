let str1:string='Hello'
let str2:string="Type"
let str3:string=`Script`

//String Method

//Sting length
console.log("STR1 length is ",str1.length)

// to UpperCase(), toLoweCase()
let text:string="welcome to testing!"
console.log("Upper Case: ", text.toUpperCase)
console.log("Lower Case: ", text.toLowerCase)

//charAt(), indexOf()
console.log("Character at 4: ", text.charAt(4))
console.log("Index of : ", text.indexOf("!"))

//includes()
console.log("Includes ABC: ", text.includes("ABC"))
console.log("Includes ing: ", text.includes("ing"))

//StartsWith() and endsWith()
console.log("Starts with Wel: ", text.startsWith("wel"))
console.log("Starts with Wel: ", text.startsWith("Type"))
console.log("Ends with ing: ", text.endsWith("ing!"))

//subString()
console.log("Substring of Testing : ", text.substring(11,15))

//concat()
console.log("Concatination: ", str1.concat(str2).concat(str3))
//trim(), trimStart(), trimEnd()

let Trim:string="    Welcome to Japan    "
console.log("Trim: ", Trim.trim())
console.log("Trim Start: ", Trim.trimStart())
console.log("Trim End: ", Trim.trimEnd())

//replace()
console.log("Replace Welcome to testing with playwright: ",text.replace("testing","Playwright"))

//split()
console.log("Splitting the text: ", text.split(" "))
let Split:string="abc@123, ABC, BCD"
console.log("Splitting the text in SPlit var: ", Split.split(" "))

/* 

OUTPUT:


STR1 length is  5
Upper Case:  [Function: toUpperCase]
Lower Case:  [Function: toLowerCase]
Character at 4:  o
Index of :  18
Includes ABC:  false
Includes ing:  true
Starts with Wel:  true
Starts with Wel:  false
Ends with ing:  true
Substring of Testing :  test
Concatination:  HelloTypeScript
Trim:  Welcome to Japan
Trim Start:  Welcome to Japan    
Trim End:      Welcome to Japan
Replace Welcome to testing with playwright:  welcome to Playwright!
Splitting the text:  [ 'welcome', 'to', 'testing!' ]
Splitting the text in SPlit var:  [ 'abc@123,', 'ABC,', 'BCD' ]

*/