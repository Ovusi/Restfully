const express = require("express")
const { use } = require("express/lib/router")
const Users = require("./models/users")

const app = express()
app.use(express.json())
const users_ = new Users

/**
 * request body = {"id": number}
 */
app.get("/api/get_user", async (req, res) => {
    const body = req.body

    await users_.retreive(body.id).then((data) => {
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
 * required request body = {"details": {"name": "", "age": number}}
 */
app.post("/api/add_user", async (req, res) => {
    // return an array of the userIds
    let idlist = await users_.getAllKeys()
    // get the length of the array
    let idLength = idlist.length
    // increment the array length by 1 to get new user ids
    let newId = idLength + 1

    const reqBody = req.body
    const userDetails = reqBody.details

    // add new user to the db.
    await users_.add(newId, userDetails).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
})

app.listen(3000, () => console.log("Listening on new port 3000..."))