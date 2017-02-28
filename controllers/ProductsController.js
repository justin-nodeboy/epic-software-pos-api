/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
const ProductsLib = require("../lib/ProductsLib");
const Product = require("../models/Product");

const productsLib = new ProductsLib();

class ProductsController{
    /**
     * This function returns all products
     */
    static returnAllProducts(){
        productsLib.returnAllProducts()
            .then(result => {
                arguments[1].status(200).send({success:result});
            })
            .catch(err => {
                arguments[1].status(400).send({error: err.message});
            });
    }

    /**
     * This function creates a new product
     */
    static createNewProduct(){
        if (!arguments[0].body) return arguments[1].status(400).send({error:"Missing required fields"});
        arguments[0].body.productCreatedDate = new Date(arguments[0].body.productCreatedDate);
        productsLib.insertNew(new Product(arguments[0].body))
            .then(() => {
                arguments[1].status(200).send({success:"A new product has been created"});
            })
            .catch(err => {
                arguments[1].status(400).send({error: err.message});
            });
    }

    /**
     *  This controller method returns a single product
     */
    static returnSingleProduct(){
        productsLib.returnSingleProduct({_id: arguments[0].id})
            .then(result => {
                arguments[1].status(200).send({success:result});
            })
            .catch(err => {
                arguments[1].status(400).send({error: err.message});
            });
    }


    /**
     * This function deletes a single user
     */
    static deleteSingleProduct(){
        if (!arguments[0].params.id) return arguments[1].status(400).send({error:"Missing ID Parameter"});
        productsLib.removeSingleProductBy(arguments[0].params.id)
            .then(() => {
                arguments[1].status(200).send({success:"Product has been removed"});
            })
            .catch(err => {
                arguments[1].status(400).send({error: err.message});
            })
    }


    /**
     * This function updates a single product
     */
    static updateSingleProduct(){
        if (!arguments[0].params.id) return arguments[1].status(400).send({error:"Missing ID Parameter"});
        productsLib.editProductBy(arguments[0].params.id, arguments[0].body)
            .then(() => {
                arguments[1].status(200).send({success:"Product has been updated"});
            })
            .catch(err => {
                arguments[1].status(400).send({error: err.message});
            })
    }

}

module.exports = ProductsController;
