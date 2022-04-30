"use strict"

// - Import tools
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")


// - Custom authentication
const auth = require("../../services/passport")


// - Import App routes
const appRouter = require("./routes/index")

class RestulAPI {

    constructor(){
        // Express server basic configuration
        this.app = express()
        // - Application routes
        this.apiEndpoints = {
            users:          "/api/users",
            roles:          "/api/roles",
        }

        // middlewares
        this.middlewares()

        // routes
        this.routes()
    }


    middlewares(){        
        // CORS
        this.app.use( cors() )
        
        // Protect API server
        this.app.use( helmet() )

        // Express parse body request to JSON
        this.app.use( express.json() )
        this.app.use( express.urlencoded({ extended: true }) )


        // Passport authentication
        this.app.use(auth.passport.initialize())
        // app.use(auth.passport.session())

        // Logger
        this.app.use( morgan("combined") )
    }


    routes(){
        // - Routes configuration
        this.app.use(this.apiEndpoints.users,           appRouter.userRouter)
        this.app.use(this.apiEndpoints.roles,           appRouter.roleRouter)
    }

    expose_app(){
        return this.app
    }
}

module.exports = RestulAPI