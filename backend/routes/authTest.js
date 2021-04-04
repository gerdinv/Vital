const express = require('express')
const router = express.Router()
const verify = require('./verifyToken.js')


router.get('/authorizedUser', verify, (req, res) => {
    console.log(req)
    res.send("You are authenticated!")
})

module.exports = router