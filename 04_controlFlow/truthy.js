
const userEmail = []

// if(userEmail){
//     console.log("Got user email")
// }else{
//     console.log("Don't have user email")
// }

// falsy value
// false, 0,-0,BigInt 0n, "",undifined, NaN


//truthy values
// "0",'False'," ",[],{},function(){}

// if(userEmail.length ===0){
//     console.log("Array is empty")
// }

const emptyObj = {}
// if(Object.keys(emptyObj).length ===0){
//     console.log("Object is empty")
// }

// Nullish Coalescing operator(??): null undefined

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 12
val1 = null ?? 10 ??12
// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")