const express = require("express")
const { use } = require("express/lib/router")
const Users = require("./models/users")
const app = express()

app.use(express.json())
const users_ = new Users


/**
 * request body = {"name": ""}
 */
app.get("/api/get_user/:", async (req, res, next) => {
    const body = req.body
    if (req.method === "GET") {
        if (!body) {
            // if payload  is empty, return error code.
            res.statusCode(400)
        } else {
            // else we query the db and return the data.
            await users_.retreive(body.name).then((data) => {
                res.send(data)
            }).catch(next)
        }
    }
})

app.get("/api/get_all_users", async (req, res, next) => {
    if (req.method === "GET") {
        // return an array of user keys from the db.
        await users_.getAllKeys()
            .then((data) => {
                res.send(data)
            }).catch(next)
    }
})

/**
 * request body = {"name": "", "details": {}"}
 */
app.post("/api/add_user", async (req, res) => {
    const body = req.body
    const userName = body.name
    const userDetails = body.details
    if (req.method === "POST") {
        const keys = await users_.getAllKeys()
        // check if key exists in the db.
        if (keys.includes(req.body)) {
            // if it exists, return an error.
            res.send("Already exists.")
        } else {
            // add new user to the db.
            await users_.add(userName, userDetails).then((data) => {
                res.send(data)
            }).catch(next)
        }
    }
})

app.listen(3000, () => console.log("Listening on port 3000..."))