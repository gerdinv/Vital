const mongoose = require('mongoose')

const UserSession = new mongoose.Schema({
    userId: {
        type: String,
        default: ''
    },
    authorized: {
        type: Boolean,
        default: false
    },
    token: {
        type: String,
        default: ''
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('UserSession', UserSession)