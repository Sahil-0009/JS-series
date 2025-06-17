(
function chai(){ // named iife
    console.log(`DB connected`)
})(); // ; import
// chai()
( (name)=>{ // un name iife
    console.log(`DB connected ${name}`)
})("Sahil")