"use strict"
/*------------------------------------------------
             STORE API WITH MONGODB
-------------------------------------------------*/

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        //_id

        email: {
            type: String,
            trim: true,
            unique: true,
            required: true
        },

        password: {
            type: String,
            trim: true,
            required:true
        }
    },
    {
        collection: 'Users',
        timestamps: true
    }
)

module.exports.User = mongoose.model('User', UserSchema)   