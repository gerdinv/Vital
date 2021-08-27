const express = require('express')
const router = express.Router()
// const UserSchema = require('../models/userModel')
const PostSchema = require('../models/userPost')
// const UserSession = require('../models/userSession')

const verify = require('./verifyToken')

const dotenv = require('dotenv')

dotenv.config()

router.get('/getAllPosts', verify, async (req, res) => {

  try {
    const posts = await PostSchema.find();
    res.json({
      message: "Success",
      posts: posts
    });
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
    
})

module.exports = router