const express = require("express")
const { use } = require("express/lib/router")
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
        users.add.then((data) => {
            res.send(data)
        })
    }
})

app.listen(3000, () => console.log("Listening on port 3000..."))