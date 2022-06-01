const { use } = require("express/lib/router")
const level = require("level")


/* This module contains database functions for users
   It uses the LevelDb database. */


function Users() {
    const db = level("userDb") // Create database store

    this.add = async (key, value) => {
        const keyString = JSON.stringify(key)
        const valueString = JSON.stringify(value)

        return await db.put(key, valueString)
            .then(() => {
                return {
                    "Status": "Successful",
                    "id": key,
                    "details": JSON.parse(valueString)
                }
            })
            .catch((err) => { return err })
    }

    this.retreive = async (key) => {
        const keyString = JSON.stringify(key)
        const valueString = await db.get(keyString)
        return {
            "id": JSON.parse(keyString),
            "details": JSON.parse(valueString)
        }
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