const mongo = require("mongodb").MongoClient

const url = "mongodb://localhost:27017/mydb"

/**
 * mongo.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
})
 */


const findAll = (request, response) => {
    mongo.connect(url, function (err, db) {
        if (err) throw err;
        const dbo = db.db("mydb");

        //const myobj = { name: "Teniola Goat", address: "Highway 37", mobile: 081234567 };

        dbo.collection("users").find({}).toArray(function (err, res) {
            if (err) throw err;
            console.log("found!");
            db.close();
            response.send(res)
        });
    });
}

const insert = (request, response) => {
    mongo.connect(url, function (err, db) {
        if (err) throw err
        const dbo = db.db("mydb")

        const myobj = {
            name: request.body.username,
            address: request.body.useradd,
            mobile: request.body.mobile
        }

        dbo.collection("users").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
            response.send(res)
        })
    })
}

module.exports = { findAll, insert }

