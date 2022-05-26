const express = require("express")
const { use } = require("express/lib/router")
const Users = require("./models/users")
const app = express()

const users_ = new Users

app.get("/api/get_user", async (req, res) => {
    if (!req) {
        res.statusCode(400)
    }
})

app.get("/api/get_all_users", async (req, res) => {
    if (!req) {
        res.statusCode(400)
    } else {
        res.send(users_.getAllKeys())
    }
})

app.post("/api/add_user", async (req, res) => {
    if (await users_.getAllKeys().includes(req)) {
        res.send("Already exists.")
    } else {
        await users_.add(req).then((data) => {
            res.send(data)
        })
    }
})

app.listen(3000, () => console.log("Listening on port 3000..."))