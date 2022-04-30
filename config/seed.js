"use strict"

// Import all modules and tools needed
const MongooseConnection = require("../db/mongoose")
const envConf = require("./environments/development")
const User = require("../api/http/models/user")
const Role = require("../api/http/models/role")


const createDbConnectionForTransactions = (envConf) => {
    const db = new MongooseConnection(envConf.db)
    await db.connect()

    let connection = db.getConnection()

    return connection
}

const createDefaultRoles = async () => {

    const db = new MongooseConnection(envConf.db)
    await db.connect()

    const connection = db.getConnection()
    let session = await connection.startSession()
    session.startTransaction()
    try {
        let roles = envConf.roles

        await Role.create(roles, { session })

        await session.commitTransaction()
        console.log("Success")
    } catch (error) {
        console.log(`ERROR :${error}`)
        await session.abortTransaction()
    }
    session.endSession()
}

const createDefaultUsers = () => {
}

const executeSeeders = async() => {
    await createDefaultRoles()
    // await createDefaultUsers
    return
}

executeSeeders()

module.exports = { executeSeeders }