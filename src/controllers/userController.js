"use strict"
/*------------------------------------------------
             STORE API WITH MONGODB
-------------------------------------------------*/

const {User} = require('../models/userModel')

module.exports.user = {
    
    // List Users
    list: async (req, res) => {

        const data = await User.find()

        res.status(200).send({
            error: false,
            result: data
        })
    },

    // CRUD Operations

    // Create
    create: async (req, res) => {

        const data = await User.create(req.body)

        res.status(201).send({
            error: false,
            result: data
        })
    },

    // Read
    read: async (req, res) => {

        const data = await User.findOne({ _id:req.params.userId })

        res.status(200).send({
            error: false,
            result: data
        })
    },

    // Update
    update: async (req, res) => {

        const data = await User.updateOne({ _id:req.params.userId }, req.body)

        res.status(202).send({
            error: false,
            result: data
        })
    },

    // Delete
    delete: async (req, res) => {

        const data = await User.deleteOne({ _id:req.params.userId})
    }


}