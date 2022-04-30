"use strict"

// - Import and configureate router
const { Router } = require("express")
const userRouter = Router()
const { instancer } = require("../../../helpers/instancer")

// - Middlewares
const { check } = require("express-validator")
const { validateFields, validateRole, validateEmail, validateUser } = require("../../../middlewares/validators")


// - Import resources for the respective object
const UsersController = require("../controllers/users.controller")
const usersController = new UsersController()

userRouter.post("/sign_up", [   
    check("email", "Invalid e-mail").isEmail(),
    check("email").custom(validateEmail),
    check("password", "Password must has at least 6 characters").isLength( {min: 6} ),
    validateFields
],  (req, res) => instancer(req, res, "users.controller-signUp"))

userRouter.post("/", [
    check("email", "Invalid e-mail").isEmail(),
    check("email").custom(validateEmail),
    check("password", "Password must has at least 6 characters").isLength( {min: 6} ),
    check("role").custom(validateRole), // Only for administration area
    validateFields
], (req, res) => instancer(req, res, "users.controller-postUser"))


userRouter.post("/sign_in", [
    check("email").isEmail(),
    check("password").not().isEmpty(),
    validateUser,
    validateFields
], (req, res) => instancer(req, res, "users.controller-signIn"))

userRouter.get("/",             usersController.getUsers)
userRouter.get("/:id",          usersController.getUser)
userRouter.put("/:id",          usersController.updateUser)
userRouter.patch("/:id",        usersController.updateUser)
userRouter.delete("/:id",       usersController.deleteUser)

module.exports = userRouter