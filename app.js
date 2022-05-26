const express = require("express")
const Users = require("./models/users")
const app = express()


app.get("/api/get_user", (req, res) => {
    if (!req) {
        res.statusCode(400)
    }
})

app.post("/api/add_user", (req, res) => {
    
})