const express = require("express")
const Users = require("./models/users")
const app = express()

const users = new Users

app.get("/api/get_user", (req, res) => {
    if (!req) {
        res.statusCode(400)
    }
})

app.get("/api/get_all_users", (req, res) => {
    if (!req) {
        res.statusCode(400)
    }
})

app.post("/api/add_user", (req, res) => {
    if (users.getAllKeys.includes(req)) {
        res.send("Already exists.")
    } else {
        res.send(users.add)
    }
})