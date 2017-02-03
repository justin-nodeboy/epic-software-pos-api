/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
const jwt = require("jsonwebtoken");


class AuthenticationLib {

    /**
     * This function generates a JWT token
     * @param user
     * @returns {*}
     */
    static generateToken(user){
        return jwt.sign(user, process.env.SECRET, {
            expiresIn: "12h" // expires in 12 hours
        });
    }

    /**
     * This function verifies that the token is supplied and is valid
     * @param req
     * @return {Promise}
     */
    static verifyToken(req){
        return new Promise(
            (resolve, reject) => {
                let token = req.headers['x-access-token'];

                if (token){
                    jwt.verify(token,process.env.SECRET, function (err, decoded){
                        if (err){
                            reject(err);
                        } else {
                            req.decoded = decoded;
                            resolve();
                        }
                    });
                } else {
                    reject({success:false, message:"No token provided"});
                }
            }
        )
    }

}

module.exports = AuthenticationLib;
