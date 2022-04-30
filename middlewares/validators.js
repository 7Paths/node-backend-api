"use strict"

const User = require("../api/http/models/user")
const Role = require("../api/http/models/role")
const { validationResult } = require("express-validator")
const bcrypt = require("bcrypt")

const validateFields = (request, response, next) => {
    const errors = validationResult(request)

    if(!errors.isEmpty()){
        return response.status(400).json(errors)
    }

    next()
}

const validateEmail = async(email) => {
    let doesEmailExist = await User.findOne( {email} )
    
    if(doesEmailExist){
        print.log("E-mail already exists")
        throw new Error("E-mail already exists")
    }
    
    return
}

const validateRole = async(roleId) => {
    try {
        let role = await Role.findById(roleId)

        if(!role) throw new Error(`Invalid roleId ${roleId}`)
        return
    } catch (error) {
        print.error("ERROR")
        print.log(error)
        throw new Error(`ERROR: Invalid roleId ${roleId}`)
    }
}

const validateUser = async(request, response, next) => {
    let { email, password } = request.body

    if( !email || !password ){
        print.error("Email & password are required")
        return reponder.respondWithError("Email & password are required", response)
    }

    let user = await User.findOne( {email} )

    if(!user){
        print.error("User not found")
        return responder.respondWithNotFound("User not found", response)
    }

    let doesPasswordMatch = await bcrypt.compare(password, user.password)

    if( !doesPasswordMatch ){
        return reponder.respondWithError("Password does not match", response)
    }

    request.body["id"] = user._id

    next()
}

const validateUserAuthenticity = (request, response, next) => {
    if (!request.headers.authorization) {
        return responder.respondWithError("Authorization")
    }else{

    }
}

module.exports = {
    validateFields,
    validateEmail,
    validateRole,
    validateUserAuthenticity,
    validateUser
}