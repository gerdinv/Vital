const express = require("express")
const cors = require('cors')
var signupRouter = require('./signup')
var signinRouter = require('./signin')
var logoutRouter = require('./logout')
var authTestRouter = require('./authTest')
var getUserInfo = require('./getUserInfo')
var createPost = require('./createPost')

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

module.exports = function(app) {
    app.use(express.json())
    app.use(cors(corsOptions))
    app.use('/app', signupRouter)
    app.use('/app', signinRouter)
    app.use('/app', logoutRouter)
    app.use('/app', authTestRouter)
    app.use('/app', getUserInfo)
    app.use('/app', createPost)
}