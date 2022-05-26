const express = require("express")
const { use } = require("express/lib/router")
const Users = require("./models/users")
const app = express()

app.use(express.json())
const users_ = new Users

app.get("/api/get_user", async (req, res) => {
    if (req.method === "GET") {
        if (!req.body) {
            // if payload  is empty, return error code.
            res.statusCode(400)
        } else {
            // else we query the db and return the data.
            await users_.retreive(req.body).then((data) => {
                res.send(data)
            })
        }      
    }
})

app.get("/api/get_all_users", async (req, res) => {
    if (req.method === "GET") {
    // return an array of user keys from the db.
    await users_.getAllKeys()
        .then((data) => {
            res.send(data)
        })        
    }
})

app.post("/api/add_user", async (req, res) => {
    if(req.method === "POST") {
        if (users_.getAllKeys().includes(req.body)) {
            // check if key exists in the db.
            // if it exists, return an error.
            res.send("Already exists.")      
        } else {
            // add new user to the db.
            await users_.add(req).then((data) => {
                res.send(data)
            })
        }
    }

})

app.listen(3000, () => console.log("Listening on port 3000..."))