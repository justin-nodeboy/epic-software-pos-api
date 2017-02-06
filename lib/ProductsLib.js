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

}

module.exports = ProductsLib;