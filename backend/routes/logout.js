const express = require('express')
const router = express.Router()
const UserSession = require('../models/userSession')

router.get('/logout', (req, res, next) => {
    cookie = req.headers.cookie
    token = cookie.substring(6)
    console.log(token)
    
    res.clearCookie('token').send("cookies cleared")
    UserSession.remove(cookie, {justOne: true})
})

module.exports = router