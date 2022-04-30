"use strict"


const { Schema, model } = require("mongoose")

const User = require("./user")

const CompanySchema = new Schema({
    name: {
        type: String,
        required: [true, "Company name is required"]
    },

    address: {
        type: String,
        required: [true, "Company address is required"]
    },

    website: {
        type: String,
        required: [true, "Company website is required"]
    },
},{
    timestamps: true
})


CompanySchema.methods.createUser = async function() {

    try {
        // user's information
        let username = this.name,
        email = this.name + "@gmail.com",
        password = "hola",
        company = this._id

        let userInformation = { username, email, password, company }

        // create an instance of users
        let user = new User(userInformation)

        user.encryptPassword()
        await user.createRole()
        await user.save()

        return user
    } catch (error) {
        console.log(error)
        return false
    }

}



module.exports = model("company", CompanySchema)