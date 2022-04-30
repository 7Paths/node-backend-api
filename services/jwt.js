"use strict"

const jwt = require("jsonwebtoken")
const moment = require("moment")

const generateToken = ( userId ) => {

    let payload = {
        id: userId,
        iat: moment().unix(),
        exp: moment().add(8, "hours").unix()
    }

    return jwt.sign(payload, appEnv.security.secretKey)
}

module.exports = { generateToken }