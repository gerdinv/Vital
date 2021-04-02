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
    date: {
        type: Date,
        default: Date.now
    }
})

UserSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

UserSchema.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', User)