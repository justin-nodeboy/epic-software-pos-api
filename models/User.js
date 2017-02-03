/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */

class User {

    /**
     * Constructor - Maps the request body object to the required model fields.
     * @param obj - {
         * password: String,
         * firstName: String,
         * lastName: String,
         * type: Number,
         * fullName: String,
         * email: String,
         * phone: String,
         * joinDate: Date,
         * dateOfBirth: Date
     * }
     * @throws An error will throw if any of the constructor arguments are incorrect
     */
    constructor(obj){
        //Construct variables
        if (!obj.hasOwnProperty('password')){
            throw new Error("A password is required");
        } else if (typeof obj.password != "string"){
            throw new Error("The password must be a string");
        } else {
            this.password = obj.password;
        }

        if (!obj.hasOwnProperty('firstName')){
            throw new Error("A firstName is required");
        } else if (typeof obj.firstName != "string"){
            throw new Error("The firstName must be a string");
        } else {
            this.firstName = obj.firstName;
        }

        if (!obj.hasOwnProperty('lastName')){
            throw new Error("A lastName is required");
        } else if (typeof obj.lastName != "string"){
            throw new Error("The lastName must be a string");
        } else {
            this.lastName = obj.lastName;
        }

        if (!obj.hasOwnProperty('type')){
            throw new Error("A type is required");
        } else if (typeof obj.type != "number"){
            try {
                obj.type = parseInt(obj.type);
            } catch (e){
                throw new Error("The type must be a number");
            }
        } else {
            this.type = obj.type;
        }

        if (!obj.hasOwnProperty('fullName')){
            throw new Error("A fullName is required");
        } else if (typeof obj.fullName != "string"){
            throw new Error("The fullName must be a string");
        } else {
            this.fullName = obj.fullName;
        }

        if (!obj.hasOwnProperty('email')){
            throw new Error("A email is required");
        } else if (typeof obj.email != "string"){
            throw new Error("The email must be a string");
        } else {
            this.email = obj.email;
        }

        if (!obj.hasOwnProperty('phone')){
            throw new Error("A phone is required");
        } else if (typeof obj.phone != "number"){
            throw new Error("The phone must be a number");
        } else {
            this.phone = obj.phone;
        }

        if (!obj.hasOwnProperty('joinDate')){
            throw new Error("joinDate is required");
        } else if (Object.prototype.toString.call(obj.joinDate) != "[object Date]") {
            throw new Error("joinDate must be a date");
        } else {
            this.joinDate = new Date(obj.joinDate);
        }

        if (!obj.hasOwnProperty('dateOfBirth')){
            throw new Error("dateOfBirth is required");
        } else if (Object.prototype.toString.call(obj.dateOfBirth) != "[object Date]"){
            throw new Error("dateOfBirth must be a date");
        } else {
            this.dateOfBirth = new Date(obj.dateOfBirth);
        }

        this.archived = obj.archived || false;
    }
}

module.exports = User;
