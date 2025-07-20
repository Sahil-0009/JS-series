// let muName = 'Sahil    '
// let muChannel = 'Chai    '

// console.log(muName.truelength);

let myHeros = ['thor','spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.sahil = function(){
    console.log(`Sahil is present in all objects`)
    
}

Array.prototype.heySahil = function(){
    console.log(`Sahil says hello`);
    
}

// heroPower.sahil()   
myHeros.sahil()
myHeros.heySahil()
// heroPower.heySahil()

// inheritance 

const User = {
    name : 'Sahil',
    email:'abc@gmail.com'
}

const Teacher = {
    makeVedio :true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment :'JS Assignment',
    fullTime:true,
    __proto__: TeachingSupport
}

 Teacher.__proto__ = User

 // modern syntax 

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`),
    console.log(`${this.length}`),
    console.log(`True length is : ${this.trim().length}`)
    
}
anotherUsername.trueLength()
"Sahil".trueLength()
"iceTea".trueLength()