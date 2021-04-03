const express = require('express')
const router = express.Router()
const UserSchema = require('../models/userModel')
const UserSession = require('../models/userSession')
const bcrypt = require('bcrypt')

router.post('/signin', (req, res, next) => {
    let password = req.body.password

    //Look for the user
    UserSchema.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) {
            res.json(err)
        } if (!user) {
            res.end("Username was not found!");
        } else {
            //Decrypt the password
            bcrypt.compare(password, user.password, (err, match) => {
                if (err) {
                    console.log(err)
                } else if (match) {
                    //Save the session if the password matches
                    const userSession = new UserSession({
                        userId: user._id
                    });
                    userSession.save().then(data => {
                        res.json(data)
                    }).catch(err => {  
                        res.json(err)
                    })
                } else {
                    res.end("incorrect password")
                }
            })
        }
    });
});

module.exports = router