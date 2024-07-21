"use strict"
/*------------------------------------------------
             STORE API WITH MONGODB
-------------------------------------------------*/

const { storeProducts, storeCategory } = require('../controllers/productsController')

// For importing Router
const router = require('express').Router()

// Category
router.route('/category')
    .get(user.list)
    .create(user.create)

router.route('/:categoryId')
    .get(user.read)
    .put(user.update)
    .patch(user.update)
    .delete(user.delete)

// Products
router.route('/products')
    .get(user.list)
    .create(user.create)

router.route('/:productId')
    .get(user.read)
    .put(user.update)
    .patch(user.update)
    .delete(user.delete)


module.exports = router