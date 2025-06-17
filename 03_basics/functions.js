
// console.log("S")
// console.log("a")
// console.log("h")
// console.log("i")
// console.log("l")

function sayMyName(){
    console.log("S")
    console.log("a")
    console.log("h")
    console.log("i")
    console.log("l")
}
// sayMyName()

// function addTwoNum(num1,num2){
//     console.log(num1+num2)
// }
function addTwoNum(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
}
const result = addTwoNum(3,4)
// console.log("Result : "+result )

function loginUserMessage(userName ="Sam"){
    if(userName === undefined){
    console.log("Please enter a message")
    return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Sahil"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2, ...num1){// rest operator ...  sprade operator
    return num1

}
// console.log(calculateCartPrice(200,300,400))

const user = {
    username :" Sahil",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username : "Sahil",
    price : 299
})

const myArr = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArr))
console.log(returnSecondValue([200,300,400]))