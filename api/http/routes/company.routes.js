"use strict"

// Configurating express router
const { Router } = require("express")
const companyRouter = Router()

// Import controller and tools used
const companiesController = require("./../controllers/companies.controller")


// Company routes
companyRouter.get("/", companiesController.get)
companyRouter.post("/", companiesController.create)
companyRouter.get("/:companyId", companiesController.getCompany)
companyRouter.delete("/:companyId", companiesController.delete)

module.exports = companyRouter
