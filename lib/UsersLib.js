/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
const db = require("../MongoClient");
const ObjectID = require('mongodb').ObjectID;

class UsersLib {

    constructor(){
        this.collection = db.prototype.returnDB().collection("users");
    }

    /**
     * This function returns all users, or you can specify a query to get certain users
     * Pass in optional query {}
     * @returns {Promise}
     */
    returnAllUsers(){
        return new Promise(
            (resolve, reject) => {
                const objectConstructor = {}.constructor;
                let query = {};
                if (arguments[0] && arguments[0] === objectConstructor){
                    query = arguments[0];
                }
                this.collection.find(query,{password: 0}).sort({lastName:1}).toArray()
                    .then(result => {
                        resolve(result);
                    })
                    .catch(err => {
                        reject(err);
                    });
            }
        )
    }

    /**
     * This function inserts a new user
     * @param user
     * @return {Promise}
     */
    insertNew(user){
        return new Promise(
            (resolve, reject) => {
                this.collection.insertOne(user)
                    .then(() => {
                        resolve();
                    })
                    .catch(err => {
                        reject(err);
                    });
            }
        )
    }

}

module.exports = UsersLib;
