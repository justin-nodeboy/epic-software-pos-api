/**
 * Copyright (c) 2017, Justin Howard.
 * Licensed under the MIT License.
 */
//Required Libs
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//App
const app = require("../app");

//Routers
const IndexRouter = require('./Index/IndexRouter');
const UsersRouter = require('./Users/UsersRouter');
const AuthenticationRouter = require('./Authentication/AuthenticationRouter');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Insecure Routes
app.use('/', IndexRouter);
app.use('/auth', AuthenticationRouter);
//Secure Routes
app.use('/users',UsersRouter);

//Export Router
module.exports = router;


