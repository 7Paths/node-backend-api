"use strict"

// - Import models & tools
const User = require("../models/user")
const Role = require("../models/role")
const { generateToken } = require("../../../services/jwt")

class UsersController {

    constructor(user){
        this.user = user
    }

    async signUp(_, response){
        try {
            let user = new User(this.user)
            
            let userRole = await Role.findOne( {name: "user"})

            if( !userRole ) return responder.respondWithError("Couldn't assign a role", response) 

            user.role = userRole

            await user.encryptPassword()

            if( !user.password  ) return responde.respondWithError("Couldn't encrypt the password", response)

            await user.save()

            if( !user) return responder.respondWithError(null, response)

            return responder.respondWithSuccessful(user, response)
        } catch (error) {
            console.log(error)
            return responder.respondWithError(null, response)   
        }
    }

    async signIn(_, response){
        let user = await User.findOne( { email: this.user.email } )

        let payload = {
            token: generateToken(this.user.id),
            user
        }
        return responder.respondWithSuccessful(payload, response)
    }

    async postUser(_, response){
        try {
            let user = new User(this.user)
            
            await user.encryptPassword()

            if( !user.password  ) return responde.respondWithError("Couldn't encrypt the password", response)

            await user.save()

            if( !user) return responder.respondWithError(null, response)

            return responder.respondWithSuccessful(user, response)
        } catch (error) {
            print.error(error)
            return responder.respondWithError(null, response)   
        }
    }

    async getUsers(request, response){
        try {
            let users = User.find({})

            if( !users) return responder.respondWithError(null, response)

            return responder.respondWithSuccessful(users, response)
        } catch (error) {
            console.log(error)
            return responder.respondWithError(null, response)
        }
    }

    async getUser(request, response){
        let { id } = request.params
        try {
            let user = User.findById(id)

            if( !user) return responder.respondWithNotFound(null, response)

            return responder.respondWithSuccessful(user, response)
        } catch (error) {
            console.log(error)
            return responder.respondWithError(null, response)
        }
    }

    deleteUser(request, response){
        let { id } = request.params

        try {
            let user = User.findByIdAndDelete(id)

            if( !user ) return responder.respondWithError(null, response)

            return responder.respondWithSuccessful(user, response)
        } catch (error) {
            console.log(error)
            return responder.respondWithError(null, response)
        }
    }

    updateUser(request, response){
        let { id } = request.params
        let newUserParams = request.body
        try {
            let user = User.findByIdAndUpdate(id, { new: true }, newUserParams)

            if( !user ) return responder.respondWithError(null, response)

            return responder.respondWithSuccessful(user, response)
        } catch (error) {
            console.log(error)
            return responder.respondWithError(null, response)
        }
    }

    test(req, res){
        console.log(this.user)
        return responder.respondWithSuccessful({msg: "holiss"}, res)
    }
}


module.exports = UsersController
