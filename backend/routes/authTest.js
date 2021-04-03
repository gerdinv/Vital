const express = require('express')
const { JsonWebTokenError } = require('jsonwebtoken')
const router = express.Router()

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]
    console.log(req)
    if(!token){
        res.send("We need a token")
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                res.json({
                    auth: false,
                    message: "Failed to authenticate",
                    error: err
                })
            } else {
                req.userAuthId = decoded.id
                next()
            }
        })
    }
}

router.get('/test', verifyJWT, (req, res) => {
    res.send("You are authenticated!")
})

module.exports = router