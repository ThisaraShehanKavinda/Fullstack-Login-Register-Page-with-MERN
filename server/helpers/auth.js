const bcrypt = require('bcrypt');

// Hash the password with a salt round of 12
const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) return reject(err);
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) return reject(err);
                resolve(hash);
            });
        });
    });
};

// Compare the plain password with the hashed password
const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
};

module.exports = {
    hashPassword,
    comparePassword
};
