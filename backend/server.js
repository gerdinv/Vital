const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true}, () => {
    console.log("Database connected!")
})

app.listen(4000, () => {
    console.log("Server is running!")
})