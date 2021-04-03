const express = require("express")
const cors = require('cors')
var signupRouter = require('./signup')
var signinRouter = require('./signin')

module.exports = function(app) {
    app.use(express.json())
    app.use(cors())
    app.use('/app', signupRouter)
    app.use('/app', signinRouter)
}