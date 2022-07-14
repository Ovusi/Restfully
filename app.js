const express = require("express")
const { use } = require("express/lib/router")
const Users = require("./models/users")
const { insert, findAll } = require("./tutorial")

const app = express()
app.use(express.json())
const users_ = new Users

/**
 * request param - id = number
 */
app.get("/api/get_user/:userid", async (req, res) => {
    // get request "id" parameter
    const _id = req.params.userid
    // get list of all database user IDs
    let idlist = await users_.getAllKeys()
    // check that user id exists
    if (!idlist.includes(_id)) {
        res.send({
            "Error": "Not found"
        })
    } else {
        // get user details from DB
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
app.post("/api/add_user/:user", async (req, res) => {
    // return an array of the userIds
    const idlist = await users_.getAllKeys()
    // get the length of the array
    let idLength = idlist.length
    // increment the array length by 1 to get new user ids
    let newId = idLength + 1
    // get request body
    const reqBody = req.body
    const userDetails = reqBody.details
    const newUser = req.params.user

    // if user name oesnt exist...
    if (!idlist.includes(newUser)) {
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
            await users_.add(newUser, userDetails).then((data) => {
                res.send(data)
            }).catch((err) => {
                res.send(err)
            })
        }
    } else {
          // if user name exists...
        res.send({
            "Error": "already exists"
        })
    }

})

app.post("/instertcoll", insert)
app.get("/searchall", findAll)

app.listen(3000, () => console.log("Listening on port 3000..."))