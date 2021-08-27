const express = require('express')
const { deleteOne } = require('../models/userSession')
const router = express.Router()
const UserSession = require('../models/userSession')
const verify = require("./verifyToken");

router.get('/logout', verify, (req, res, next) => {
    token = req.userAuthToken
    console.log("TOKEN BEING REMOVED: " + token)
    res.clearCookie("token").send("cookies cleared");
})

module.exports = router