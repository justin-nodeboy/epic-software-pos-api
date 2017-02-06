/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
const db = require("../MongoClient");
const ObjectID = require('mongodb').ObjectID;
const objectConstructor = {}.constructor;

class BasketLib {

    constructor(){
        this.collection = db.prototype.returnDB().collection("baskets");
    }

    /**
     * This function returns all baskets, or you can specify a query to get certain baskets
     * Pass in optional query {}
     * @returns {Promise}
     */
    returnAllBaskets(){
        return new Promise(
            (resolve, reject) => {
                let query = {};
                if (arguments[0] && arguments[0] === objectConstructor){
                    query = arguments[0];
                }
                this.collection.find(query).sort({createdDate:1}).toArray()
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
     * This function inserts a new Basket
     * @param basket
     * @return {Promise}
     */
    insertNew(basket){
        return new Promise(
            (resolve, reject) => {
                this.collection.insertOne(basket)
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
     * This function returns a single Basket based on a query
     * @return {Promise}
     */
    returnSingleBasket(){
        return new Promise(
            (resolve, reject) => {
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
                        if (!result) reject(new Error("Basket does not exist"));
                        resolve(result);
                    })
                    .catch(err => {
                        reject(err);
                    });
            }
        )
    }


    /**
     * This function removes a Basket by ID
     * @param id
     * @return {Promise}
     */
    removeSingleBasketBy(id){
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
     * This function edits a single Basket
     * @param id
     * @param basket
     * @return {Promise}
     */
    editBasketBy(id,basket){
        return new Promise(
            (resolve, reject) => {
                this.collection.updateOne({_id: new ObjectID(id)}, {$set: basket})
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

module.exports = BasketLib;
