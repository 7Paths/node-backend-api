"use strict"

const User = require("../http/models/user")


// Validate create the user admin
const userAdminExists = async( req, res, next ) => {

    let userAdmin = await User.findOne({name: "adminpractica", role: "admin"})

    if(userAdmin){
        console.log(`User admin alredy created`);
        return res.json({successful: true, message: "User admin already created"})
    }

    next()
}



module.exports = {
    userAdminExists
}