const descripter = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descripter);

// console.log(Math.PI); // 3.141592653589793

const  chai = {
    name: 'chai',
    price: 100,
    quantity: 10,
    totalPrice: function() {
        return this.price * this.quantity;
    }
}
console.log(chai.totalPrice()); // 1000
// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

Object.defineProperty(chai, "price", {
    // writable: false,
    // configurable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value === 'function') {
        continue; // Skip functions
    }
    console.log(`${key}: ${value}`); 
}
