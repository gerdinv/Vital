const express = require("express")
const cors = require('cors')
var signupRouter = require('./signup')
var signinRouter = require('./signin')
var verifyRouter = require('./userVerification')
var logoutRouter = require('./logout')
var authTestRouter = require('./authTest')

module.exports = function(app) {
    app.use(express.json())
    app.use(cors())
    app.use('/app', signupRouter)
    app.use('/app', signinRouter)
    app.use('/app', verifyRouter)
    app.use('/app', logoutRouter)
    app.use('/app', authTestRouter)
}