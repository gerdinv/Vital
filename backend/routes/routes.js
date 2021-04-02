// File is responsible for routing the requests that come to the server

// const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const UserSchema = require('../models/userModel')
const bcrypt = require('bcrypt')

router.post('/signup', (req, res) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securedPassword = await bcrypt.hash(req.body.password, saltPassword)

    const newUser = new UserSchema({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: securedPassword
    })
    newUser.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router