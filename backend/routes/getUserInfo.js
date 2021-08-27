const express = require('express')
const router = express.Router()
const UserSchema = require('../models/userModel')
const UserSession = require('../models/userSession')

const verify = require('./verifyToken')

const dotenv = require('dotenv')

dotenv.config()

router.get('/getUserInfo', verify, (req, res, next) => {
    UserSchema.findOne({
        _id: req.userAuthId,
      }, (err, user) => {
        if (err) {
            res.json({
                authorized: false,
                message: "Username ID does not exist in the database!",
                error: err
                });
        } else {
            res.json({
                id: req.userAuthId,
                user: user,
                message: "Success",
            });
        }
      }
    );


    // console.log("HEADERS: " + req.headers)
    // UserSession.findOne({
    //     token: token
    // }, (err, userSesh) => {
    //     if (err) {
    //         res.json(err)
    //     } if (!userSesh) {
    //         res.json({
    //             authorized: false,
    //             message: "User session not found aka token not in DB"
    //         })
    //     } else {
    //         UserSchema.findOne({
    //             _id: userSesh.userId
    //         }, (err, user) => {
    //             if (err) {
    //                 res.json(err)
    //             } else if (!user) {
    //                 res.end("This user does not exist! Account deleted?")
    //             } else {
    //                 console.log("FOUND USER INFO")
    //                 res.json({
    //                     user: user,
    //                     message: "Success"
    //                 })
    //             }
    //         })
    //     }
    // })
})

module.exports = router