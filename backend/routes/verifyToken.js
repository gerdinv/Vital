const e = require("express");
const jwt = require("jsonwebtoken");
const { deleteOne } = require("../models/userPost");

module.exports = (req, res, next) => {

  const cookie = req.headers.cookie
  let index = -1
  if(cookie.includes("token")) index = cookie.indexOf("token=")


if(cookie !== undefined) {
    const token = cookie.substring(442)
    if(!token) {
        console.log("We need a token")
        res.send("We need a token")
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
          if (err) {
            console.log("error authenticating the token: " + err);
            res.json({
              auth: false,
              message: "Failed to authenticate",
              error: err,
            });
          } else {
            req.userAuthToken = token
            req.userAuthId = decoded.user_id; // This will be passed to any function that uses this middleware
            next()
          }
        });
    } 
}
};
