const express = require('express')
const router = express.Router()
const UserSchema = require('../models/userModel')
 
router.post('/signup', (req, res) => {

    const newUser = new UserSchema({
        fullname: req.body.fullname,
        username: req.body.username.toLowerCase(),
        email: req.body.email,
        password: req.body.password
    })

    UserSchema.findOne({
        username: req.body.username
    }, (err, previousUser) => {
        if (err) {
            res.json(err)
        } else if (previousUser) {
            res.end("An account with this username already exists!")
        } else {
            // After checking if the username is taken, check if the email is taken
            UserSchema.findOne({
                email: req.body.email
            }, (err, previousUser) => {
                if (err) {
                    res.json(err)
                } else if (previousUser) {
                    res.end("An account with this email already exists!")
                } else {
                    newUser.password = newUser.generateHash(req.body.password)
                    newUser.save().then(data => {
                        res.json(data)
                    }).catch(err => {
                        res.json(err)
                    })
                }
            })
        }
    })
})

module.exports = router