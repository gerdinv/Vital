const express = require('express')
const router = express.Router()
const UserSchema = require('../models/userModel')
 

router.post('/signup', (req, res) => {

    const newUser = new UserSchema({
        fullname: req.body.fullname,
        username: req.body.username.toLowerCase(),
        email: req.body.email.toLowerCase(),
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
            console.log('An account with this username already exists');
            console.log(previousUser)
            res.end("An account with this username already exists!")
        } else {
            UserSchema.findOne({
                email: query2
            }, (err, previousUser) => {
                if (err) {
                    res.json(err)
                } else if (previousUser) {
                    console.log('An account with this email already exists');
                    console.log(previousUser)
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