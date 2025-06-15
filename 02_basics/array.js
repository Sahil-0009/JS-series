const arr = [0,1,2,3,4,5]

const myHeros = ["Ram","Rohim"]

const arr2 = new Array(1,2,3,4,5)
// console.log(arr[0])

// ====== Array method ========

// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(9)
// arr.shift()

// console.log(arr.includes(9))
// console.log(arr.indexOf(3))


const newArray = arr.join()

// console.log(arr)
// console.log(typeof newArray)

// slice, splice
console.log('A',arr)
const myArr = arr.slice(1,3)

console.log(myArr)
console.log("B",arr)

const myArr2 = arr.splice(1,3)
console.log("C",arr)
console.log(myArr2)