const express = require('express')
const { deleteOne } = require('../models/userSession')
const router = express.Router()
const UserSession = require('../models/userSession')

router.get('/logout', (req, res, next) => {
    cookie = req.headers.cookie
    token = cookie.substring(442)
    console.log("TOKEN BEING REMOVED: " + token)

    UserSession.findOneAndDelete({token: token}).then(function(){
        res.clearCookie("token").send("cookies cleared");
    })
    
})

module.exports = router