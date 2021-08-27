const express = require('express')
const router = express.Router()
const CreatePostSchema = require('../models/userPost')
const UserSession = require('../models/userSession')
const verify = require('./verifyToken')
const UserSchema = require("../models/userModel");


router.post('/createPost', verify, (req, res, next) => {
    
    const newPost = new CreatePostSchema({
        userId: req.body.userId,
        title: req.body.title,
        genre: req.body.genre,
        description: req.body.description
    })

    const cookie = req.headers.cookie
    const token = cookie.substring(442)
    
    UserSchema.findOne(
      {
        _id: req.userAuthId,
      },
      (err, user) => {
        if (err) {
          res.send("Error: " + err);
        } else {
          newPost.userId = req.userAuthId;
          newPost
            .save()
            .then((data) => {
              res.send({
                created: true,
                message:
                  "Post was successfully created and stored inside of the Database!",
                data: data,
              });
            })
            .catch((err) => {
              res.send({
                message: "Error saving the post to the DB",
                error: err,
              });
            });
        }
      }
    );
})

module.exports = router