const user = {
    username : "Sahil",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got user details from database")
        console.log(`Username : ${this.username}`);
        console.log(this);
        
        

    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLogedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLogedIn = isLogedIn
    
    this.greeting = ()=>{
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}

const userOne = new User("Sahil",10,true)
const userTwo = new User("Sahil 2",11,true)
console.log(userOne);
console.log(userTwo);
