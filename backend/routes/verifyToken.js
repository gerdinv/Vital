const e = require('express')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const cookie = req.headers.cookie

    if(cookie != undefined) {
        const token = cookie.substring(6)
        if (!token) {
            res.send("We need a token")
        } else {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
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
    } else {
        console.log("NO COOKIE")
        res.send("No cookie! Go sign in")
    }
}