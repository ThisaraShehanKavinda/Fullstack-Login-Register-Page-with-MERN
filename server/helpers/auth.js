const bcrypt = require('bcrypt');
const { decrypt } = require('dotenv');


const hashPassword = (password)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.genSalt(12,(err,salt) =>{
            if (err) {
                reject(err)
            }
            bcrypt.hash(password,salt,(err, hash)=>{
                if (err) {
                    reject(err)
                }
                resolve(hash)
            })
        })

    })
}

const comparePassword = (password, hashed)=>{
    return decrypt.compare(password, hashed)
}

module.exports = {
    hashPassword,
    comparePassword
}