/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
const express = require('express');
const router = express.Router();
const AuthenticationController = require("../../controllers/AuthenticationController");
const UsersController = require("../../controllers/UsersController");

router.get('/', (req,res) => {
    res.status(200).send({
        apiVersion: "1.0.0",
        webVersion: "1.0.0",
        iosVersion: "1.0.0",
        androidVersion: "1.0.0"
    });
});

router.route('/login')
    .post(AuthenticationController.loginUser);

router.route('/register')
    .post(UsersController.createNewUser);


module.exports = router;


