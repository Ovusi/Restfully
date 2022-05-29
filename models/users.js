const { use } = require("express/lib/router")
const level = require("level")


/* This module contains database functions for users
   It uses the LevelDb database. */


   function Users() {
    const db = level("userDb") // Create database store

    this.add = async (key, value) => {
        const keyString = JSON.stringify(key)
        const valueString = JSON.stringify(value)

        return await db.put(keyString, valueString)
            .then(() => {return "Successfully added"})
            .catch((err) => console.log(err))
    }

    this.retreive = async (key) => {
        const keyString = JSON.stringify(key)
        return await db.get(keyString)
    }

    this.getAllKeys = async () => {
        const keys = []
        for await (const [key, value] of db.iterator()) {
            keys.push(key)
        }
        return keys
    }
}

module.exports = Users