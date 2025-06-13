
// Primitive data type 
// & types : String, Number , Boolean, null, undefined, Symbol, BigInt,

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 122112n



//Reference Type (Non primitive)

// Array , object , function

const heros = ["Sahil", "Ram", "Arjun"]
let myObj = {
    name: " Rahul",
    age: 23

}
const myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof bigNumber)
// console.log(typeof outsideTemp)


// =======================================================

// Stack (Primitive) , Heap (Non-primitive)

let myYoutubeName = "Bookreading"
let anotherName = myYoutubeName
anotherName ="Chai"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"

}
let userTwo = userOne

userTwo.email = "sahil@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
