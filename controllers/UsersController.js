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
                arguments[0].body.phone = parseInt(arguments[0].body.phone);
                arguments[0].body.joinDate = new Date(arguments[0].body.joinDate);
                arguments[0].body.dateOfBirth = new Date(arguments[0].body.dateOfBirth);
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

    /**
     * This controller method returns a single user
     */
    static returnSingleUser(){
        usersLib.returnSingleUser({_id: arguments[0].id})
            .then(result => {
                arguments[1].status(200).send({success:result});
            })
            .catch(err => {
                arguments[1].status(500).send({error: err.message});
            });
    }

    /**
     * This function deletes a single user
     */
    static deleteSingleUser(){
        if (!arguments[0].params.id) return arguments[1].status(400).send({error:"Missing ID Parameter"});
        usersLib.removeSingleUserBy(arguments[0].params.id)
            .then(() => {
                arguments[1].status(200).send({success:"User has been removed"});
            })
            .catch(err => {
                arguments[1].status(500).send({error: err.message});
            })
    }

    /**
     * This function updates a single user
     */
    static updateSingleUser(){
        if (!arguments[0].params.id) return arguments[1].status(400).send({error:"Missing ID Parameter"});
        usersLib.editUserBy(arguments[0].params.id, arguments[0].body)
            .then(() => {
                arguments[1].status(200).send({success:"User has been updated"});
            })
            .catch(err => {
                arguments[1].status(500).send({error: err.message});
            })
    }

}

module.exports = UsersController;
