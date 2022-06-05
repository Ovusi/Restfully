const express = require("express")
const { use } = require("express/lib/router")
const Users = require("./models/users")

const app = express()
app.use(express.json())
const users_ = new Users

/**
 * request param - id = number
 */
app.get("/api/get_user", async (req, res) => {
    // get request "id" parameter
    const _id = req.query['id']
    // get list of all database IDs
    let idlist = await users_.getAllKeys()
    let listLength = idlist.length

    // check that user id exists
    if (_id > listLength || _id < 1) {
        res.send({
            "Error": "Not found"
        })
        // check if body.id is a number
    } else if (isNaN(_id)) {
        res.send({
            "Error": "Id input is not a number"
        })
        // get user details from DB
    } else {
        await users_.retreive(_id).then((data) => {
            res.send(data)
        }).catch((err) => console.log(err))
    }
})

app.get("/api/get_all_users", async (req, res) => {
    // return an array of user keys from the db.
    await users_.getAllKeys()
        .then((data) => {
            res.send(data)
        }).catch((err) => {
            res.send(err)
        })
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
    // get request body
    const reqBody = req.body
    const userDetails = reqBody.details

    // check that request body is present or correct
    if (!reqBody || !userDetails) {
        res.send({
            "Error": "Must include request body."
        })

    } else if (!userDetails.name 
        || !userDetails.age 
        || isNaN(userDetails.age)) {
        res.send({
            "Error": "Add name and/or age. age might not be a number."
        })

    } else {
        // if checks are passed, add new user to the db.
        await users_.add(newId, userDetails).then((data) => {
            res.send(data)
        }).catch((err) => {
            res.send(err)
        })
    }
})

app.listen(3000, () => console.log("Listening on port 3000..."))