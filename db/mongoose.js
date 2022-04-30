"use strict"

const mongoose = require("mongoose")

class DbConfiguration {
    constructor(db){
        this.db = db
    }

    async connect(){
        try {
            this.connection = await mongoose.connect( `mongodb://${this.db.host}:${this.db.port}/${this.db.namespace}`, {
                retryWrites: false,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            })

            return {successful: true}
        } catch (error) {
            console.log(`ERROR: ${error}`)
            return {successful: false}
        }
    }

    getConnection(){
        return this.connection
    }

    closeConnection(){
        this.connection.close()
    }

}

module.exports = DbConfiguration