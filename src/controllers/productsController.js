"use strict"
/*------------------------------------------------
             STORE API WITH MONGODB
-------------------------------------------------*/

const {StoreCategory, StoreProducts} = require('../models/productsModel')

module.exports.storeCategory = {
    
    // List Categories
    list: async (req, res) => {

        const data = await StoreCategory.find()

        res.status(200).send({
            error: false,
            result: data
        })
    },

    // CRUD Operations

    // Create
    create: async (req, res) => {

        const data = await StoreCategory.create(req.body)

        res.status(201).send({
            error: false,
            result: data
        })
    },

    // Read
    read: async (req, res) => {

        const data = await StoreCategory.findOne({ _id:req.params.categoryId })

        res.status(200).send({
            error: false,
            result: data
        })
    },

    // Update
    update: async (req, res) => {

        const data = await StoreCategory.updateOne({ _id:req.params.categoryId }, req.body)

        res.status(202).send({
            error: false,
            result: data
        })
    },

    // Delete
    delete: async (req, res) => {

        const data = await StoreCategory.deleteOne({ _id:req.params.categoryId})

        res.status(204).send({
            error: false,
            result: data
        })
    }
}

module.exports.storeProducts = {
    
    // List Products
    list: async (req, res) => {

        const data = await StoreProducts.find()

        res.status(200).send({
            error: false,
            result: data
        })
    },

    // CRUD Operations

    // Create
    create: async (req, res) => {

        const data = await StoreProducts.create(req.body)

        res.status(201).send({
            error: false,
            result: data
        })
    },

    // Read
    read: async (req, res) => {

        const data = await StoreProducts.findOne({ _id:req.params.productId })

        res.status(200).send({
            error: false,
            result: data
        })
    },

    // Update
    update: async (req, res) => {

        const data = await StoreProducts.updateOne({ _id:req.params.productId }, req.body)

        res.status(202).send({
            error: false,
            result: data,
            new: await StoreProducts.findOne({_id:req.params.productId})

        })
    },

    // Delete
    delete: async (req, res) => {

        const data = await StoreProducts.deleteOne({ _id:req.params.productId})

        res.status(204).send({
            error: false,
            result: data
        })
    }
}