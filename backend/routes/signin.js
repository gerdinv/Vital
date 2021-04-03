const express = require('express')
const router = express.Router()
const UserSchema = require('../models/userModel')
const UserSession = require('../models/userSession')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const dotenv = require('dotenv')

dotenv.config()

router.post('/signin', (req, res, next) => {
    let password = req.body.password

    //Look for the user
    UserSchema.findOne({
        username: req.body.username.toLowerCase()
    }, (err, user) => {
        if (err) {
            res.json(err)
        } if (!user) {
            res.json({
                authorized: false,
                message: "Username does not exist in the database!"
            })
        } else {
            //Decrypt the password
            bcrypt.compare(password, user.password, (err, match) => {
                if (err) {
                    console.log(err)
                    res.json(err)
                } else if (match) {

//                  Create token for authentication
                    const id = user._id
                    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                        expiresIn: 300,
                    })

//                  Save the session if the password matches
                    const userSession = new UserSession()
                    userSession.userId = user._id 
                    userSession.save().then(data => {
                        res.json({
                            authorized: true,
                            token: token,
                            result: user
                        })
                    }).catch(err => {  
                        res.json(err)
                    })

                } else {
                    res.json({
                        authorized: false,
                        message: "Invalid password"
                    })
                }
            })
        }
    });
});

module.exports = router