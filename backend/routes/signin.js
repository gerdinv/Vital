const express = require('express')
const router = express.Router()
const UserSchema = require('../models/userModel')
const UserSession = require('../models/userSession')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const dotenv = require('dotenv')
var cookieSession = require('cookie-session')

dotenv.config()

router.post('/signin', (req, res, next) => {
    let password = req.body.password

    //Look for the user
    UserSchema.findOne({
        username: req.body.username
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
                    // const secret = bcrypt.hashSync(process.env.JWT_SECRET, bcrypt.genSaltSync(10), null)
                    // console.log('New secret: ' + secret)
                    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                        expiresIn: 3600,
                    }) 

                    cookieSessions = cookieSession({
                        name: 'session',
                        keys: [process.env.JWT_SECRET],
                        maxAge: 1 * 60 * 60 * 1000, //1 hour
                        httpOnly: true
                    })

                    console.log("Cookie session " + cookieSessions)

                    res.cookie('token', token, { maxAge: 3600000, httpOnly: true }) // 1 hour

//                  Save the session if the password matches
                    const userSession = new UserSession({
                        userId: user._id,
                        authorized: true,
                        token: token,
                    })
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