"use strict"

const http = require("http")
const RestfulAPI = require("./api/http/restful")
const DbConnection = require("./db/mongoose")

class Server {

    constructor(env, app){
        this.restfulAPI = new RestfulAPI()
        this.server = http.createServer(this.restfulAPI.expose_app())
        this.env = env
        this.app = app
    }

    listen(){
        this.server.listen(this.app.http, () => {
            print.info(`Http Server listening on port ${this.app.http}`);
        })
    }

    tryDB(){
        let database = new DbConnection(this.app.db)
        database.connect().then((database) => {

            if(database.successful){
                print.info("MongoDB -> Mongoose = connection stablished")
                return
            }

            print.error("Something went wrong :(")
        }).catch(error => {
            print.error(error)
        })
    }
}

module.exports = Server

