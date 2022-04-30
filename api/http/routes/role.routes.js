"use strict"

// Import frameworks and helpers for the router
const { Router } = require("express")
const roleRouter = Router()


// controllers used
const RolesController = require("../controllers/roles.controller")
const rolesController = new RolesController()


// routes

roleRouter.post("/", rolesController.post)
roleRouter.get("/", rolesController.get)
roleRouter.put("/:id", rolesController.put)
roleRouter.delete("/:id", rolesController.delete)


module.exports = roleRouter
