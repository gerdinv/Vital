const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const cookie = req.headers.cookie
    const token = cookie.substring(6) 
    console.log(token)

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
}