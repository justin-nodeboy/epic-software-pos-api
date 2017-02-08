/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
const scrypt = require("scrypt");
const bcrypt = require('bcrypt');
const saltRounds = 10;

class EncryptionLib {

    /**
     * This function encrypts a new password
     * @param password
     * @return {Promise}
     */
    static encryptPassword(password){
        return new Promise(
            (resolve, reject) => {
                bcrypt.hash(password, saltRounds)
                    .then(result => {
                        resolve(result);
                    })
                    .catch(err => {
                        reject(err);
                    });
            }
        )
    }
    // static encryptPassword(password){
    //     return new Promise(
    //         (resolve, reject) => {
    //             scrypt.kdf(password, {N: 1, r:1, p:1})
    //                 .then(result => {
    //                     resolve(result);
    //                 })
    //                 .catch(err => {
    //                     reject(err);
    //                 });
    //         }
    //     )
    // }

    /**
     * This function verifies that the password that has been inputted matches the saved password
     * @param inputPassword
     * @param savedPassword
     * @return {Promise}
     */
    static verifyPassword(inputPassword, savedPassword){
        return new Promise(
            (resolve, reject) => {
                bcrypt.compare(inputPassword, savedPassword)
                    .then(result => {
                        result ? resolve() : reject(new Error("Please check your login credentials"));
                    })
                    .catch(err => {
                        reject(err);
                    });
            }
        )
    }
    // static verifyPassword(inputPassword, savedPassword){
    //     return new Promise(
    //         (resolve, reject) => {
    //             scrypt.verifyKdf(savedPassword, inputPassword)
    //                 .then(result => {
    //                     result ? resolve() : reject(new Error("Please check your login credentials"));
    //                 })
    //                 .catch(err => {
    //                    reject(err);
    //                 });
    //         }
    //     )
    // }

}

module.exports = EncryptionLib;
