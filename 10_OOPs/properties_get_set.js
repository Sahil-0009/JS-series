class User {
    constructor(email, password) {
        Object.defineProperty(this, 'password', {
            get: function () {
                return this._password;
            },
            set: function (newPassword) {
                this._password = newPassword;
            }
        });
        Object.defineProperty(this, 'email', {
            get: function () {
                return this._email;
            },
            set: function (newEmail) {
                this._email = newEmail;
            }
        });

        // Now assign values using the defined setters
        this.email = email;
        this.password = password;
    }
}

const user = new User('Sahil', '1234');
console.log(user.email);     // Output: Sahil
console.log(user.password);  // Output: 1234
