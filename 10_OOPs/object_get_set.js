const User = {
    email: "Sahil@gmail.com",
    name: "Sahil",
    get userEmail() {
        return this.email;
    },
    set userEmail(email) {        
            this.email = email;      
    }
    

}

const tea = Object.create(User);
console.log(tea.userEmail); 