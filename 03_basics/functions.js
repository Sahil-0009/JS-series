
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
console.log(loginUserMessage())
