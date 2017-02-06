/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */

class Basket {

    /**
     * Constructor - Maps the request body object to the required model fields.
     * @param obj - {
         * basketUserGuid: String,
         * basketCreatedDate: Date,
         * basketContents: Array<JSON>,
         * basketTotal: Number,
         * basketSessionToken: String
     * }
     * @throws An error will throw if any of the constructor arguments are incorrect
     */
    constructor(obj){
        //Construct variables
        if (!obj.hasOwnProperty('basketUserGuid')){
            this.basketUserGuid = null;
        } else if (typeof obj.basketUserGuid != "string"){
            throw new Error("The basket guid must be a string");
        } else {
            this.basketUserGuid = obj.basketUserGuid;
        }

        if (!obj.hasOwnProperty('basketSessionToken')){
            throw new Error("basketSessionToken is required");
        } else if (typeof obj.basketSessionToken != "string"){
            throw new Error("The basket session token must be a string");
        } else {
            this.basketSessionToken = obj.basketSessionToken;
        }

        if (!obj.hasOwnProperty('basketCreatedDate')){
            throw new Error("basketCreatedDate is required");
        } else if (Object.prototype.toString.call(obj.basketCreatedDate) != "[object Date]") {
            throw new Error("basketCreatedDate must be a date");
        } else {
            this.basketCreatedDate = new Date(obj.basketCreatedDate);
        }

        if (!obj.hasOwnProperty('basketContents')){
            throw new Error("basketContents is required");
        } else if (obj.basketContents.length === 0){
            throw new Error("There must be at least 1 item in the basket");
        } else {
            this.basketContents = obj.basketContents;
        }

        if (!obj.hasOwnProperty('basketTotal')){
            throw new Error("A basketTotal is required");
        } else if (typeof obj.basketTotal != "number"){
            throw new Error("The basket total must be a number");
        } else {
            this.basketTotal = obj.basketTotal;
        }

        if (obj.productPictureArray){
            this.productPictureArray = obj.productPictureArray;
        }

        this.archived = obj.archived || false;
        this.basketActive = obj.basketActive || true;
    }
}

module.exports = Basket;
