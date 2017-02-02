/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
const scrypt = require("scrypt");
const scryptParameters = scrypt.paramsSync(0.5);

class EncryptionLib {

    /**
     * This function encrypts a new password
     * @param password
     * @return {Promise}
     */
    static encryptPassword(password){
        return new Promise(
            (resolve, reject) => {
                scrypt.kdf(password, {N: 1, r:1, p:1})
                    .then(result => {
                        resolve(result);
                    })
                    .catch(err => {
                        reject(err);
                    });
            }
        )
    }

}

module.exports = EncryptionLib;
