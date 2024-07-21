"use strict"
/*------------------------------------------------
             STORE API WITH MONGODB
-------------------------------------------------*/

const { storeProducts, storeCategory } = require('../controllers/productsController')

// For importing Router
const router = require('express').Router()

// Category
router.route('/category')
    .get(storeCategory.list)
    .post(storeCategory.create)

router.route('category/:categoryId')
    .get(storeCategory.read)
    .put(storeCategory.update)
    .patch(storeCategory.update)
    .delete(storeCategory.delete)

// Products
router.route('/product')
    .get(storeProducts.list)
    .post(storeProducts.create)

router.route('/product/:productId')
    .get(storeProducts.read)
    .put(storeProducts.update)
    .patch(storeProducts.update)
    .delete(storeProducts.delete)


module.exports = router