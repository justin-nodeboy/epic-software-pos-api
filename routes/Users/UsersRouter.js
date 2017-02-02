/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */

const express = require('express');
const router = express.Router();
const UsersController = require("../../controllers/UsersController");

router.route('/')
    .get(UsersController.returnAllUsers)
    .post(UsersController.createNewUser);

module.exports = router;


