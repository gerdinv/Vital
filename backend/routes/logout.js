const express = require('express')
const router = express.Router()
const UserSession = require('../models/userSession')

router.get('/logout', (req, res, next) => {
    const token = req.query.token

    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
        $set: {
            isDeleted: true
        }
    }, { useFindAndModify: false }, (err, sessions) => {
        if (err) {
            console.log(err)
            return res.send({
                success: false,
                message: 'Error: Server error'
            })
        } else {
            return res.send({
                success: true,
                message: 'Good'
            })
        }
    })
})

module.exports = router