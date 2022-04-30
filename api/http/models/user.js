"use strict"

const { Schema, model } = require("mongoose")
const Role = require("./role")

const bcrypt = require("bcrypt")

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "User email is required"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "User password is required"]
    },
    
    firstname: {
        type: String,
        // required: [true, "User name is required"]
    },

    lastname: {
        type: String,
        // required: [true, "User lastname is required"]
    },

    role: {
        type: Schema.Types.ObjectId,
        ref: "role",
        required: [true, "User role is required"]
    },

    status: {
        type: Boolean,
        default: true
    },

    deletedAt: {
        type: Date,
    }
}, {
    timestamps: true
})

UserSchema.methods.toJSON = function(){
    const { __v, password, ...user } = this.toObject()
    return user
}

UserSchema.methods.validPassword = function(password) {
    return (bcrypt.compareSync(password, this.password))
}

UserSchema.methods.encryptPassword = async function() {
    try {
        let salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)

        return true

    } catch (error) {
        this.password = false
        print.error(error)
        return false
    }
}

UserSchema.methods.createRole = async function(roles_id = null) {
    try {
        
        let role = await Role.findOne({ name: "company" })

        if(!role){ 
            return
        }

        this.role = role._id

        return

    } catch (error) {
        console.log(`Error: ${error}`)
    }
}


module.exports = model('user', UserSchema)