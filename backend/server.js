const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/signup')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Database connected!")
})

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)

app.listen(4000, () => {
    console.log("Server is running!")
})



