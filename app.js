const express = require("express")
const { use } = require("express/lib/router")
const Users = require("./models/users")

const app = express()
app.use(express.json())
const users_ = new Users

/**
 * request body = {"name": ""}
 */
app.get("/api/get_user", async (req, res) => {
    const body = req.body

    await users_.retreive(body.name).then((data) => {
        res.send(data)
    }).catch((err) => console.log(err))
})

app.get("/api/get_all_users", async (req, res) => {
    // return an array of user keys from the db.
    await users_.getAllKeys()
        .then((data) => {
            res.send(data)
        }).catch((err) => console.log(err))
})

/**
 * required request body = {"name": "", "gender": ""}
 */
app.post("/api/add_user", async (req, res) => {
    const userName = req.body.name
    const userGender = req.body.gender

    // add new user to the db.
    await users_.add(userName, userGender).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
})

app.listen(3000, () => console.log("Listening on port 3000..."))