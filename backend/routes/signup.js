// File is responsible for routing the requests that come to the server

// const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const UserSchema = require('../models/userModel')
const bcrypt = require('bcrypt')

router.post('/signup', (req, res) => {

    // const saltPassword = bcrypt.genSalt(10)
    // const securedPassword = bcrypt.hash(req.body.password, saltPassword)

    const newUser = new UserSchema({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })


    var query = req.body.username;
    var query2 = req.body.email

    UserSchema.findOne({
        username: query
    }, (err, previousUser) => {
        if (err) {
            res.json(err)
        } else if (previousUser) {
            res.end("Account already exsits!")
            console.log('This has already been saved');
        }
    })

    UserSchema.findOne({
        email: query2
    }, (err, previousUser) => {
        if (err) {
            res.json(err)
        } else if (previousUser) {
            res.end("Account already exsits!")
            console.log('This has already been saved');
        } else {
            newUser.save().then(data => {
                res.json(data)
            }).catch(err => {
                res.json(err)
            })
        }
    })
})

module.exports = router