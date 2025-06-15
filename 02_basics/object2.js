
// const tinderUser = new Object()  singleton object
const tinderUser = {} // non singleton object

tinderUser.id ="123abc"
tinderUser.name = "Sahil"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email :" sahil@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Abu",
            lastname :"Sahil"
        }
    }
}
// console.log(regularUser.fullname)
// console.log(regularUser.fullname?.userfullname.firstname)


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj4 ={5:"a",6:"b"}

// const obj3 ={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}

// console.log(obj3)

const users = [
    {
        id: 1,
        email:"Sahil@gmail.com"
    },
    {
        id: 1,
        email:"Sahil@gmail1.com"
    },
    {
        id: 1,
        email:"Sahil@gmail2.com"
    },
    {
        id: 1,
        email:"Sahil@gmail3.com"
    },
    {
        id: 1,
        email:"Sahil@gmail4.com"
    }
]

// console.log(users[1].email)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isloggedIn"))

const course = {
    coursename :"Js  in Hindi",
    price :"999",
    courseInstructor:"Hitesh"
}

const{courseInstructor :instructor}=course
// console.log(courseInstructor)
// console.log(instructor)

// const navbar =({company})=>{

// }
// navbar(company = "Company")

// {
//     "name":"Sahil",
//     "coursename" : " Js ",
//     "price" : "999"
// }