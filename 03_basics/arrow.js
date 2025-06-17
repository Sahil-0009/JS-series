
const user = {
    username: "Sahil",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username ="Sahil"
//     console.log(this)
// }
// chai()


// const chai = () => {
//     let username ="Sahil"
//     console.log(this)
// }
// chai()


// const addtwo = (n1,n2) => {
//     return n1+n2
// }

// const addtwo = (n1,n2) => n1+n2 // implicit return

// console.log(addtwo(1,2))

const addtwo = (n1,n2) => ({username : "Sahil"}) // implicit return

console.log(addtwo(1,2))

// const myArray = [1,2,3,4]
// myArray.forEach()