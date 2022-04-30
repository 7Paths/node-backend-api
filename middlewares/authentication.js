"use strict"


const jwt = require("jsonwebtoken")
const moment = require("moment")
const { security } = require("./../config/development")

const AppResponder = require("./../helpers/responder")
const { respondWithUnAuthorized } = new AppResponder




const authenticateToken = (request, response, next) => {

    if(!request.headers.authorization){
        return respondWithUnAuthorized("No token provided", response)
    }

    let token = req.headers.authorization.replace(/['"']+/g, "")

    try {
        
        let payload = jwt.decode(token, security.SECRET_KEY)

        if(payload.exp <= moment().unix()){
            return respondWithUnAuthorized("The token has expired", response)
        }

        request.user = payload
        next()

    } catch (error) {
        console.log(error)
        return respondWithUnAuthorized("Invalid token", response)
    }
    

}


module.exports = { authenticateToken }


