"use strict"

const Role = require("../models/role")

class RolesController{

    async post(request, response){
        let roleParams = request.body

        try {
            let role = new Role(roleParams)

            await role.save()

            if(!role) responder.respondWithError(null, response)

            return responder.respondWithSuccessful(role, response)

        } catch (error) {
            console.log(error)
            return responder.respondWithError(error, response) 
        }
    }

    async get(request, response){
        try {
            let roles = await Role.find({})

            if(!roles) responder.respondWithError(null, response)

            return responder.respondWithSuccessful(roles, resopnse)

        } catch (error) {
            console.log(error)
            return responder.respondWithError(error, response)
        }
    }

    async put(request, response){
        let { id: roleId } = request.params
        let roleParams = request.body

        try {
            let roleUpdated = await Role.findByIdAndUpdate(roleId, { new: true })
            
            if(!roleUpdated) responder.respondWithError(null, response)

            return responder.respondWithSuccessful(roleUpdated, response)

        } catch (error) {
            console.log(error)
            return responder.respondWithError(error, response)
        }
    }

    async delete(request, response){
        let { id: roleId } = request.params

        try {
            let role = await Role.findByIdAndDelete(roleId)

            if(!role) responder.respondWithError(null, response)

            return responder.respondWithSuccessful(null, response)
            
        } catch (error) {
            console.log(error)
            return responder.respondWithError(error, response)   
        }
    }
}

module.exports = RolesController


