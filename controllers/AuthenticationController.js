/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
const UsersLib = require("../lib/UsersLib");
const EncryptionLib = require("../lib/EncryptionLib");
const AuthenticationLib = require("../lib/AuthenticationLib");
const User = require("../models/User");

const usersLib = new UsersLib();

class AuthenticationController {

    /**
     * This static method checks a users login details and then sends back the user profile and a token
     */
    static loginUser(){
        if (!arguments[0].body && !arguments[0].body.email && !arguments[0].body.password) return arguments[1].status(400).send({error:"Missing required fields"});
        let user;
        usersLib.returnSingleUser({email: arguments[0].body.email})
            .then(result => {
                if (result.length === 0){
                    throw new Error("Please check your login credentials");
                }
                user = result;
                //return EncryptionLib.verifyPassword(new Buffer(arguments[0].body.password), new Buffer(result.password, "base64"));
                return EncryptionLib.verifyPassword(arguments[0].body.password, result.password);
            })
            .then(() => {
                return AuthenticationLib.generateToken(user);
            })
            .then(result => {
                arguments[1].status(200).send({success:{token: result, profile: user}});
            })
            .catch(err => {
                arguments[1].status(400).send({error: err.message});
            });
    }

}

module.exports = AuthenticationController;
