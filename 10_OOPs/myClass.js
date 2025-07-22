// class User {
//     constructor(userName, email, password){
//         this.userName = userName
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.userName.toUpperCase()}`
//     }
// }
// const chai = new User( 'Sahil','abc@gmail.com','123')
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(userName, email, password) {
        this.userName = userName
        this.email = email
        this.password = password
    
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.userName.toUpperCase()}`
}
const tea = new User('Abu', 'cba@gmail.com','321')
console.log(tea.changeUsername());
console.log(tea.encryptPassword());

