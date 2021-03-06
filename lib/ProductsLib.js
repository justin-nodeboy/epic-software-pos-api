/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
const db = require("../MongoClient");
const ObjectID = require('mongodb').ObjectID;
const objectConstructor = {}.constructor;

class ProductsLib {

    constructor(){
        this.collection = db.prototype.returnDB().collection("products");
    }

    /**
     * This function returns all products, or you can specify a query to get certain products
     * Pass in optional query {}
     * @returns {Promise}
     */
    returnAllProducts(){
        return new Promise(
            (resolve, reject) => {
                let query = {};
                if (arguments[0] && arguments[0] === objectConstructor){
                    query = arguments[0];
                }
                this.collection.find(query).sort({productName:1}).toArray()
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
     * This function inserts a new product
     * @param product
     * @return {Promise}
     */
    insertNew(product){
        return new Promise(
            (resolve, reject) => {
                this.collection.insertOne(product)
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
     * This function returns a single product based on a query
     * @return {Promise}
     */
    returnSingleProduct(){
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
                        if (!result) reject(new Error("Product does not exist"));
                        resolve(result);
                    })
                    .catch(err => {
                        reject(err);
                    });
            }
        )
    }


    /**
     * This function removes a product by ID
     * @param id
     * @return {Promise}
     */
    removeSingleProductBy(id){
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
     * This function edits a single product
     * @param id
     * @param product
     * @return {Promise}
     */
    editProductBy(id,product){
        return new Promise(
            (resolve, reject) => {
                this.collection.updateOne({_id: new ObjectID(id)}, {$set: product})
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

module.exports = ProductsLib;