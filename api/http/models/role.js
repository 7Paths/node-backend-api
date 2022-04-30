"use strict"

const { Schema, model } = require("mongoose")

const RoleSchema = Schema({
    name: {
        type: String,
        enum: ["owner", "admin", "user"],
        unique: true,
        default: "user"
    },

    status: {
        type: Boolean,
        default: true
    },

    deletedAt: {
        type: Date
    }
},{
    timestamps: true
})


module.exports = model("role", RoleSchema)



