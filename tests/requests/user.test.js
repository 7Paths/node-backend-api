"use strict"

// - Import apps and tools for testing
const chai = require("chai")
const { expect } = require("chai")
const chaiHttp = require("chai-http")

// - Import api server
const { app, userPath, bookPath, megazinePath } = require("./../app")

chai.use(chaiHttp)

// - Import functions to test
const user_controller = require("../../api/controllers/user.controller")

// - Tests

// - Test to create a user
describe(`POST: ${ userPath }`, () => {

    before(async() => {
        this.reponse = await chai.request(app).post(`${ userPath }`).send({
            user_key: "2019138",
            name: "Alejandro",
            lastname: "Carrillo",
            username: "AcarRillo",
            email: "acarrillo-2019138",
            role: "estudiante",
            password: "holis"
        })
    })

    it("expected return a user created", (done) => {
        // chai.request(app)
        // .post("/api/user")
        // .send({
        //     user_key: "2019138",
        //     name: "Alejandro",
        //     lastname: "Carrillo",
        //     username: "AcarRillo",
        //     email: "acarrillo-2019138",
        //     role: "estudiante",
        //     password: "holis"
        // }).end((err, res) => {

        //     expect(err).to.be.null

        //     expect(res).to.have.property("body")
        //     expect(res.body).to.be.an("object")

        //     expect(res.body).to.have.property("successfully")
        //     expect(res.body).to.have.property("user")

        //     expect(res.body.successfully).to.be.a("boolean")
        //     expect(res.body.successfully).to.be.equal(true)
        //     expect(res.body.user).to.be.an("object")
            
        //     done()
        // })
        console.log(this.reponse);
        done()

    })

})

// - Test to update user'status
// describe(`UPDATE: ${ userPath }`, () => {

//     it("expected user with status false", (done) => {
//         chai.request(app)
//             .update(`${ userPath }`)
//             .send
//     })

// })
