"use strict"

class AAlertResponder {

    respondWithSuccessful(payload = null, response){
        response.json({
            successful: true,
            payload
        })
    }

    respondWithError(error = null, response, status = 400){
        response.status(status).json({
            successful: false,
            error
        })
    }

    respondWithNotFound(error = "Not Found", response){
        response.status(404).json({
            successful: false,
            error
        })
    }

    respondWithUnAuthorized(error = "unauthorized", response){
        response.status(401).json({
            successful: false, 
            error
        })
    }

}

module.exports = AAlertResponder
