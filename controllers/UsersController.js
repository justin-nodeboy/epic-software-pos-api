/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
const UsersLib = require("../lib/UsersLib");
const EncryptionLib = require("../lib/EncryptionLib");
const User = require("../models/User");

const usersLib = new UsersLib();

class UsersController {

    /**
     * This function will return all users
     * Middleware arguments are passed in from router, we only need the 2nd argument which is the result object
     */
    static returnAllUsers(){
        usersLib.returnAllUsers()
            .then(result => {
                arguments[1].status(200).send({success:result});
            })
            .catch(err => {
                arguments[1].status(500).send({error: err.message});
            });
    }

    /**
     * This controller method will create a new user. It can be called from either the Users Router or the Register router
     */
    static createNewUser(){
        if (!arguments[0].body && !arguments[0].body.email && !arguments[0].body.fullName) return arguments[1].status(400).send({error:"Missing required fields"});
        usersLib.returnAllUsers({email: arguments[0].body.email, fullName: arguments[0].body.fullName})
            .then(result => {
                if (result.length > 0){
                    throw new Error("This user already exists");
                } else {
                    return EncryptionLib.encryptPassword(arguments[0].body.password);
                }
            })
            .then(result => {
                arguments[0].body.password = result.toString("hex");
                const user = new User(arguments[0].body);
                return usersLib.insertNew(user);
            })
            .then(() => {
                arguments[1].status(201).send({success:"A new user has been created"});
            })
            .catch(err => {
                arguments[1].status(500).send({error: err.message});
            })
    }

}

module.exports = UsersController;
