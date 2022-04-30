"use strict"

// Import all tools and frameworks
const Server = require("./server")
const { debug } = require("lesli-js")
const Responder = require("./helpers/responder")

// Load configuration environment
require("dotenv").config()

// Verify and require configuration environment
const env = process.env.NODE_ENV || "development"
const envConfig = require(`./config/environments/${env}.js`)

// Configure global pretty logger
global.print = debug.nodejs 
global.responder = new Responder()
global.appEnv = envConfig


if(envConfig){
    let server = new Server(env, envConfig)
    server.listen()
    server.tryDB()
} else {
    print.warn("No env configuration provided")
}
