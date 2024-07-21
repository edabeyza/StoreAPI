"use strict"
/*------------------------------------------------
             STORE API WITH MONGODB
-------------------------------------------------*/
// For importing 
const mongoose = require('mongoose')

// Category Schema
const StoreCategorySchema = mongoose.Schema(
    {
        //_id

        name: {
            type: String,
            trim: true,
            require: true
        }

        // createdAt and updatedAt will be created automathicly

    },
    {
        collection: 'storeCategories',
        timestamps: true
    }
)

const StoreProductsSchema = mongoose.Schema(
    {
        //_id

        categoryId: {
            type: 
        }
    },
    {
        collection: 'storeProducts',
        timestamps: true
    }
)

module.exports = ({ StoreCategory: mongoose.model('StoreCategory', StoreCategorySchema)})
