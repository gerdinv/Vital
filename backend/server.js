const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Database connected!")
})

require('./routes/routes')(app)

app.listen(4000, () => {
    console.log("Node Server is running!")
})
