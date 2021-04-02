// File is responsible for routing the requests that come to the server

// const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const UserSchema = require('../models/userModel')

router.post('/signup', (req, res) => {
    const newUser = new UserSchema({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    newUser.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
        console.log("HEY")
    })
})

module.exports = router