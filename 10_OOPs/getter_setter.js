class User{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get userName() {
        return this.name;
    }

    set userName(newName) {
        this.name = newName;
    }

    get userAge() {
        return this.age;
    }

    set userAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        } else {
            console.log("Please enter a valid age.");
        }
    }
}
// Example usage
const user = new User("Alice", 30);
console.log(user.userName); // Alice
user.userName = "Bob";
console.log(user.userName); // Bob
console.log(user.userAge); // 30
user.userAge = 25;
console.log(user.userAge); // 25
user.userAge = -5; // Please enter a valid age.
console.log(user.userAge); // 25 (remains unchanged)    