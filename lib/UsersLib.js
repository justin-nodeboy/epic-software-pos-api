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

    /**
     * This function returns a single user based on a query
     * @return {Promise}
     */
    returnSingleUser(){
        return new Promise(
            (resolve, reject) => {
                const objectConstructor = {}.constructor;
                let query = {};
                if (arguments[0] && arguments[0] === objectConstructor){
                    if (arguments[0]._id){
                        query._id = new ObjectID(arguments[0]._id);
                    } else {
                        query = arguments[0];
                    }
                }
                this.collection.find(query).limit(1).next()
                    .then(result => {
                        if (!result) reject(new Error("User does not exist"));
                        resolve(result);
                    })
                    .catch(err => {
                        reject(err);
                    });
            }
        )
    }

    /**
     *
     * @param id
     * @return {Promise}
     */
    removeSingleUserBy(id){
        return new Promise(
            (resolve, reject) => {
                this.collection.removeOne({_id: new ObjectID(id)})
                    .then(() => {
                        resolve();
                    })
                    .catch(err => {
                        reject(err);
                    });
            }
        )
    }

    /**
     * This function edits a single user
     * @param id
     * @param user
     * @return {Promise}
     */
    editUserBy(id,user){
        return new Promise(
            (resolve, reject) => {
                this.collection.updateOne({_id: new ObjectID(id)}, {$set: user})
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
