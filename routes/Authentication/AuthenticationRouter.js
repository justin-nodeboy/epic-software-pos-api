/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */

const express = require('express');
const router = express.Router();
const AuthenticationRouter = require("../../controllers/AuthenticationController");

router.route('/login')
    .post(AuthenticationRouter.loginUser);


module.exports = router;



