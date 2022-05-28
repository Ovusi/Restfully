const level = require("level")


/* This module contains database functions for users
   It uses the LevelDb database. */


function Users() {
    const db = level("userDb") // Create database store

    this.add = async (key, value) => {
        const keyString = JSON.stringify(key)
        const valueString = JSON.stringify(value)

        await db.put(keyString, valueString)
            .then((data) => { return data })
            .catch((err) => { return err })
    }

    this.retreive = async (key) => {
        const keyString = JSON.stringify(key)

        await db.get(keyString)
            .then((data) => { return JSON.parse(data) })
            .catch((err) => { return err })
    }

    this.getAllKeys = async () => {
        const keys = []
        const dbIterator = db.iterator()
        for await (let [key, value] of dbIterator) {
            keys.push(key)
        }
        return keys
    }
}


module.exports = Users