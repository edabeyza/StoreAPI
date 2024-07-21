"use strict"

const { user } = require('../controllers/userController')

/*------------------------------------------------
             STORE API WITH MONGODB
-------------------------------------------------*/

// For importing Router
const router = require('express').Router()

router.route('/')
    .get(user.list)
    .create(user.create)

router.route('/:userId')
    .get(user.read)
    .put(user.update)
    .patch(user.update)
    .delete(user.delete)

module.exports = router