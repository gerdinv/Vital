// File is responsible for routing the requests that come to the server

const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const UserSchema = require('./models/signUpModel.js')

router.post('/signup', (req, res) => {
    const newUser = new UserSchema({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    })
    newUser.save().then(data => {
        response.json(data)
    }).catch(err => {
        response.json(err)
    })
})

module.exports = router