const express = require("express")
const { use } = require("express/lib/router")
const Users = require("./models/users")
const app = express()

const users_ = new Users

app.get("/api/get_user", async (req, res) => {
    if (!req) {
        //...
        res.statusCode(400)
    } else {
        //...
        await users_.retreive(req).then((data) => {
            res.send(data)
        })
    }
})

app.get("/api/get_all_users", async (req, res) => {
    if (!req) {
        //...
        res.statusCode(400)
    } else {
        //...
        await users_.getAllKeys()
        .then((data) => {
            res.send(data)
        })
    }
})

app.post("/api/add_user", async (req, res) => {
    if (users_.getAllKeys().includes(req)) {
        //...
        await users_.add(req).then((data) => {
            res.send(data)
        })
    } else {
        //...
        res.send("Already exists.")
    }
})

app.listen(3000, () => console.log("Listening on port 3000..."))