const express = require('express')
const router = express.Router()
const UserSession = require('../models/userSession')

router.get('/verify', (req, res, next) => {
    const token = req.query.token

    UserSession.findOne({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            console.log(err);
            return res.send({
                success: false,
                message: 'Error: ' + err
            });
        } else if (!sessions) {
            return res.send({
                success: false,
                message: 'Error: No session'
            });
        } else {
            return res.send({
                success: true,
                message: 'Good'
            })
        }
    })
})

module.exports = router