const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const User = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type:String, 
        required: true,
        minlength: 7
    },
    token: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

User.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

User.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', User)