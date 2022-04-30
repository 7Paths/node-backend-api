"use strict"

// NOT WORKING CODE

const instancer = (req, res, controllerAction) => {

    let controllerActionDetail = controllerAction.split("-")
    let controllerPathName = controllerActionDetail[0]
    let actionName = controllerActionDetail[1]

    let Controller = require(`../api/http/controllers/${controllerPathName}.js`)
    let controller = new Controller(req.body)
    
    let action = `controller.${actionName}(req, res)`
    eval(action)
}

module.exports = { instancer }