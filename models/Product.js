/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */

class Product {

    /**
     * Constructor - Maps the request body object to the required model fields.
     * @param obj - {
         * productName: String,
         * productDescription: String,
         * productCreatedDate: Date,
         * productActive: Boolean,
         * productFeatured: Boolean,
         * productAttributes: Array<JSON>,
         * productPrice: Number,
         * productStock: Number
     * }
     * @throws An error will throw if any of the constructor arguments are incorrect
     */
    constructor(obj){
        //Construct variables
        if (!obj.hasOwnProperty('productName')){
            throw new Error("productName is required");
        } else if (typeof obj.productName != "string"){
            throw new Error("The product name must be a string");
        } else {
            this.productName = obj.productName;
        }

        if (!obj.hasOwnProperty('productDescription')){
            throw new Error("productDescription is required");
        } else if (typeof obj.productDescription != "string"){
            throw new Error("The product description must be a string");
        } else {
            this.productDescription = obj.productDescription;
        }

        if (!obj.hasOwnProperty('productCreatedDate')){
            throw new Error("productCreatedDate is required");
        } else if (Object.prototype.toString.call(obj.productCreatedDate) != "[object Date]") {
            throw new Error("productCreatedDate must be a date");
        } else {
            this.productCreatedDate = new Date(obj.productCreatedDate);
        }

        if (!obj.hasOwnProperty('productActive')){
            throw new Error("A true/false value for productActive is required");
        } else {
            this.productActive = obj.productActive;
        }

        if (!obj.hasOwnProperty('productFeatured')){
            throw new Error("A true/false value for productFeatured is required");
        } else {
            this.productFeatured = obj.productFeatured;
        }

        if (!obj.hasOwnProperty('productAttributes')){
            throw new Error("productAttributes is required");
        } else if (obj.productAttributes.length === 0){
            throw new Error("There must be at least 1 attribute");
        } else {
            this.productAttributes = obj.productAttributes;
        }

        if (!obj.hasOwnProperty('productPrice')){
            throw new Error("A productPrice is required");
        } else if (typeof obj.productPrice != "number"){
            throw new Error("The product price must be a number");
        } else {
            this.productPrice = obj.productPrice;
        }

        if (!obj.hasOwnProperty('productStock')){
            throw new Error("A productStock is required");
        } else if (typeof obj.productStock != "number"){
            throw new Error("The product stock must be a number");
        } else {
            this.productStock = obj.productStock;
        }

        this.archived = obj.archived || false;
    }

}

module.exports = Product;
