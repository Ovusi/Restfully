const { use } = require("express/lib/router")
const level = require("level")


/* This module contains database functions for users
   It uses the LevelDb database. */


function Users() {
    // Create database store
    const db = level("userDb")

    // Add key-value to database
    this.add = async (key, value) => {
        // levedb stores only string values
        const valueString = JSON.stringify(value)

        return await db.put(key, valueString)
            .then(() => {
                return {
                    "status": "Successful",
                    "userid": key,
                    "details": JSON.parse(valueString)
                }
            })
            .catch((err) => { return err })
    }

    // Get a specific value using a key
    this.retreive = async (key) => {
        const valueString = await db.get(key)
        return {
            "user id": key,
            "details": JSON.parse(valueString)
        }
    }

    // Return an array of all keys in the database
    this.getAllKeys = async () => {
        const keys = []
        for await (const [key, value] of db.iterator()) {
            keys.push(key)
        }
        return keys
    }
}

module.exports = Users