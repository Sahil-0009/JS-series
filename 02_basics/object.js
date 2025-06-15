
// singleton 

// object literals

// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name : "Sahil",
    "full name" :"Abu Jubair",
    [mySym] :"myKey1",
    age : "23",
    location : "Nagaon",
    email : "sahil@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", " Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email ="sahil123@gmail.com"
// Object.freeze(JsUser)
JsUser.email ="sahil12@gmail.com"
// console.log(JsUser.email)
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello")
}
JsUser.greeting2 = function(){
    console.log(`Hello, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())