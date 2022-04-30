"use strict"

// Rename this file as development production 

module.exports = {
    http: 8000,
    
    db: {
        namespace: "zoe-example",
        host: "localhost",
        port: 27017
    },

    security: {
        secretKey: "YOUR_SECRET_KEY"
    },

    users: [
        {
            email:      "test@gmail.com",
            password:   "test"
        }
    ],

    roles: [
        { name: "user" }
    ]
}