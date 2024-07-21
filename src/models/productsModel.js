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

        // createdAt and updatedAt will be created automatically

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
            type: mongoose.Schema.Types.ObjectId,
            ref: 'StoreCategory',
            required: true
        },

        title: {
            type: String,
            trim: true,
            required: true
        },

        description: {
            type: String,
            trim: true,
            required: true
        },
        
        price: {
            type: Number,
            required:true
        },

        discountPercentage: {
            type: Number,
            required: true
        },

        rating: {
            type: Number,
            required: true
        },
        
        stock: {
            type: Number,
            required: true
        },

        brand: {
            type: String,
            required: true
        },

        thumbnail: String,

        images: String

        // createdAt and updatedAt will be created automatically
    },
    {
        collection: 'storeProducts',
        timestamps: true
    }
)

// For exporting Models
module.exports = ({ 
    StoreCategory: mongoose.model('StoreCategory', StoreCategorySchema),
    StoreProducts: mongoose.model('StoreProducts', StoreProductsSchema)
})
